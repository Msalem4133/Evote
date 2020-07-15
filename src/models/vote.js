const mongoose = require('mongoose')
const validator = require('validator')

const voteSchema = new mongoose.Schema({
    voteTo: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Vote = mongoose.model('Vote', voteSchema)

module.exports = Vote