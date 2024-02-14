import { BskyAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import * as process from 'process';
import { exec } from 'child_process';

dotenv.config();

// Create a Bluesky Agent 
const agent = new BskyAgent({
    service: 'https://bsky.social',
});

async function main() {
    await agent.login({ 
        identifier: process.env.BLUESKY_USERNAME!,
        password: process.env.BLUESKY_PASSWORD!
    });

    const postContent = "Hello World"; // Change this to the actual content you want to post
    await agent.post({
        text: postContent
    });

    // Notify endpoint with the message and post content
    const notifyMessage = `New post has been created:\n${postContent}`;
    const ntfyEndpoint = process.env.NTFY_ENDPOINT;
    if (!ntfyEndpoint) {
        console.error("Notification endpoint is not defined in the environment variables.");
        return;
    }
    exec(`curl -L -d "${notifyMessage}" ${ntfyEndpoint}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error sending notification: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error sending notification: ${stderr}`);
            return;
        }
        console.log(`Notification sent: ${stdout}`);
    });
}

main();

// Run this on a cron job
const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
const scheduleExpression = '* * * * *'; // Run once every minute in prod

const job = new CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing
job.start();

