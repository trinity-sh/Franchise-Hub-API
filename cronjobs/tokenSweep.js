const { CronJob } = require('cron');
const mongoose = require('mongoose');
const admtoken = require('../schemas/admin-access-token');

module.exports = new CronJob(
        '0-59/3 * * * *',
        async () => {
                try {
                        await admtoken.deleteMany({ expires_in: { $lt: Date.now() } });
                } catch (e) {
                        console.error(e);
                }
        },
        null,
        false,
        'utc'
);