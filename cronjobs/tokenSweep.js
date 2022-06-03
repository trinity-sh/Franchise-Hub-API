const { CronJob } = require('cron');
const mongoose = require('mongoose');
const admtoken = require('../schemas/admin-access-token');

module.exports = new CronJob(
        /* run routine after every 1m */
        '* * * * *',
        async () => {
                try {
                        const query = { expire_at: { $lt: Date.now() } };
                        await admtoken.deleteMany(query);
                } catch (e) {
                        console.error(e);
                }
        },
        null,
        false,
        'utc'
);