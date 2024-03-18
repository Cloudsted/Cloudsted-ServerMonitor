const cloudsted = require('cloudsted');
require('dotenv').config()

const cloudstedAPIKey = process.env.CLOUDSTED_API_KEY;
const serverName = process.env.SERVER_NAME || 'My Server';

const oneMinuteMs = 60 * 1000;

const logIntervalMs = process.env.LOG_INTERVAL_MS || oneMinuteMs;

// Log Metrics
beginLoggingMetrics();

async function beginLoggingMetrics() {

    await cloudsted.initAPIKey(cloudstedAPIKey);

    logMetrics();

    // Log metrics every logIntervalMs
    setInterval(async () => {
        logMetrics();
    }, logIntervalMs);
}

async function logMetrics() {
    cloudsted.logServerMetrics(serverName);
    console.log('Logged server metrics!')
}