const PrinterQueue = require('./PrinterQueue');

console.log('=== Simulating a Print Queue Checkpoint ===\n');

const printer = new PrinterQueue();

console.log('--- Adding Jobs ---');
printer.addJob('Quarterly_Report.pdf', 15);
printer.addJob('Invoice_1042.pdf', 3);
printer.addJob('Project_Presentation.pptx', 24);
printer.addJob('Event_Flyer.png', 1);

printer.printQueue();

console.log('\n--- Processing Jobs One by One ---');
printer.processJob();
printer.processJob();

printer.printQueue();

console.log('\n--- Adding Another Job ---');
printer.addJob('Meeting_Agenda.docx', 5);

console.log('\n--- Processing Remaining Jobs ---');
printer.processAllJobs();

printer.printQueue();
