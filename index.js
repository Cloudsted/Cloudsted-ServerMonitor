const cloudsted = require('cloudsted');

const cloudstedAPIKey = process.env.CLOUDSTED_API_KEY;
cloudsted.init();

const oneMinuteMs = 60 * 1000;

const logIntervalMs = process.env.LOG_INTERVAL_MS || oneMinuteMs;