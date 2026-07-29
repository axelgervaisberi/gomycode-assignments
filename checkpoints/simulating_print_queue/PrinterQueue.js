const Queue = require('./Queue');

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    // Add a job to the print queue
    addJob(name, pages) {
        if (!name || typeof name !== 'string') {
            throw new Error('Job name must be a non-empty string.');
        }
        if (typeof pages !== 'number' || pages <= 0 || !Number.isInteger(pages)) {
            throw new Error('Number of pages must be a positive integer.');
        }

        const job = { name, pages, timestamp: new Date() };
        this.queue.enqueue(job);
        console.log(`Added job: "${name}" (${pages} pages)`);
        return job;
    }

    // Process the next job in the queue
    processJob() {
        if (this.queue.isEmpty()) {
            console.log('No print jobs to process.');
            return null;
        }

        const job = this.queue.dequeue();
        console.log(`Processing "${job.name}" (${job.pages} pages)... Done.`);
        return job;
    }

    // Process all jobs in the queue
    processAllJobs() {
        if (this.queue.isEmpty()) {
            console.log('No print jobs in the queue.');
            return [];
        }

        console.log(`Processing ${this.queue.size()} jobs...`);
        const processed = [];
        while (!this.queue.isEmpty()) {
            processed.push(this.processJob());
        }
        return processed;
    }

    // Print all pending jobs
    printQueue() {
        if (this.queue.isEmpty()) {
            console.log('Printer queue is empty.');
            return;
        }

        console.log(`\nPending print jobs (${this.queue.size()}):`);
        this.queue.getElements().forEach((job, i) => {
            console.log(`  ${i + 1}. "${job.name}" - ${job.pages} page(s)`);
        });
    }

    getPendingCount() {
        return this.queue.size();
    }
}

module.exports = PrinterQueue;
