const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const videoSchema = Schema({
    videoId: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String
    },
    title: {
        type: String,
        required: true,
        maxlength: 255
    },
    chname: {
        type: String,
        required: true,
        maxlength: 285
    },
    description: {
        type: String,
        default: "No Description",
        maxlength: 512
    },
    thumbnail: {
        type: String
    },
    chlogo: {
        type: String
    },
    views: {
        type: String,
        default: 0
    },
    likes: {
        type: String,
        default: 0
    },
    time: {
        type: String,
        default: 1
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    subs : {
        type: String,
        default: 1
    },
    tags: [
        {
            type: String
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }    
    ]
}, {timestamp: true});

module.exports = model('Video', videoSchema);