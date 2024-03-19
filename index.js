const cloudsted = require('cloudsted');
require('dotenv').config()

validateEnvironmentVariables();

const cloudstedAPIKey = process.env.CLOUDSTED_API_KEY;
const serverName = process.env.SERVER_NAME;

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

function validateEnvironmentVariables() {
    if (!process.env.CLOUDSTED_API_KEY) {
        throw new Error('CLOUDSTED_API_KEY environment variable is required');
    }

    if (!process.env.SERVER_NAME) {
        throw new Error('SERVER_NAME environment variable is required');
    }
}