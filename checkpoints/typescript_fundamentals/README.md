# TypeScript 5 Fundamentals - Slack Bot Checkpoint

A Slack bot application built with Node.js, TypeScript 5, and Slack's official Bolt framework (`@slack/bolt`).

## Features

- **Slack OAuth Integration**: Authenticates via `SLACK_BOT_TOKEN` (`chat:write`, `channels:history`).
- **Slash Commands**: Listens to `/hello` custom slash command and responds in channel.
- **Message Logging**: Listens to channel messages via Slack Events API and logs message text to console.
- **TypeScript 5 & Node.js**: Built with TypeScript and compiled to JavaScript (`bot.js`).

## Project Files

- `bot.ts` - Primary TypeScript source file containing bot logic.
- `bot.js` - Compiled JavaScript entry point.
- `package.json` - Dependencies (`@slack/bolt`, `dotenv`, `typescript`).
- `tsconfig.json` - TypeScript compiler settings.
- `.env` / `.env.example` - Environment configuration.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build TypeScript to JavaScript:
   ```bash
   npm run build
   ```

3. Run the bot:
   ```bash
   node bot.js
   ```

   Or run in TypeScript dev mode:
   ```bash
   npm run dev
   ```
