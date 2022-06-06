const mongoose = require('mongoose')

const trendingVideosSchema = new mongoose.Schema({
        thumbnail_link: {
                type: String
        },
        title: {
                type: String
        },
        description: {
                type: String
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('trendingVideos', trendingVideosSchema, 'trending-videos');