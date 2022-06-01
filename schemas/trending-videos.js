const mongoose = require('mongoose')

const trendingVideosSchema = new mongoose.Schema({
        thumbnail_link: {
                type: String,
                required: true
        },
        title: {
                type: String,
                required: true
        },
        description: {
                type: String,
                required: true
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('trendingVideos', trendingVideosSchema, 'trending-videos');