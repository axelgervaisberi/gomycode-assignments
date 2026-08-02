import { App, ExpressReceiver } from '@slack/bolt';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const botToken = process.env.SLACK_BOT_TOKEN || 'xoxb-your-slack-bot-token-here';
const signingSecret = process.env.SLACK_SIGNING_SECRET || 'a1b2c3d4e5f67890123456789abcdef0';
const port = Number(process.env.PORT) || 3000;

// Initialize ExpressReceiver to add custom browser HTTP endpoints
const receiver = new ExpressReceiver({
  signingSecret: signingSecret
});

// Root endpoint for web browser visits
receiver.router.get('/', (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>Slack Bot Status</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #1a1d21; color: #ffffff; }
          .card { background: #222529; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); text-align: center; max-width: 480px; }
          h1 { color: #ecb22e; margin-bottom: 10px; }
          p { color: #d1d2d3; line-height: 1.6; }
          .badge { display: inline-block; background: #2bac76; color: white; padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 0.9rem; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>⚡ Slack Bot Active</h1>
          <p>The Slack Bot server is running and listening for Slack events and <code>/hello</code> slash commands.</p>
          <div class="badge">Status: Online</div>
        </div>
      </body>
    </html>
  `);
});

// Health check endpoint
receiver.router.get('/health', (req, res) => {
  res.status(200).json({ status: 'online', timestamp: new Date().toISOString() });
});

// Initialize Bolt App with custom receiver
const app = new App({
  token: botToken,
  receiver: receiver
});

/**
 * Handle custom slash command: /hello
 * Responds to user with a friendly greeting message.
 */
app.command('/hello', async ({ command, ack, respond }) => {
  // Acknowledge the command request
  await ack();
  
  console.log(`[Command] /hello executed by user: ${command.user_name} (${command.user_id})`);
  
  // Respond to the user in channel
  await respond({
    response_type: 'in_channel',
    text: `👋 Hello <@${command.user_id}>! Welcome to the Slack channel.`
  });
});

/**
 * Listen and log all messages received in channels
 */
app.message(async ({ message }) => {
  // Check if message is a standard user message
  if (message.subtype === undefined || message.subtype === 'bot_message') {
    const userMsg = 'text' in message ? message.text : '[No text content]';
    const user = 'user' in message ? message.user : 'Unknown User';
    
    console.log(`[Message Received] User: ${user} | Message: "${userMsg}"`);
  }
});

// Start the Slack Bot server
(async () => {
  try {
    await app.start(port);
    console.log(`⚡️ Slack Bot is running and listening on port ${port}!`);
    console.log(`🔗 Browser preview available at http://localhost:${port}/`);
  } catch (error) {
    console.error('Failed to start Slack Bot:', error);
  }
})();
