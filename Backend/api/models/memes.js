const mongoose = require('mongoose');

//Schema for the meme saved in db
const memeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

memeSchema.index({
    url: 1,
    caption: 1
}, {
    unique: true,
});

const Meme = mongoose.model('Meme', memeSchema);
module.exports = Meme;