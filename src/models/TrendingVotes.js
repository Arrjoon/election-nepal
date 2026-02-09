const mongoose = require('mongoose');

const TrendingVotesSchema = new mongoose.Schema({
    contestant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NationalPratinidhiContestant'
    },

    votes: { type: Number, default: 0 },

    deleted_at: { type: Date, default: null }

}, { timestamps: true });

TrendingVotesSchema.index({ contestant: 1 });

module.exports = mongoose.model('TrendingVotes', TrendingVotesSchema);
