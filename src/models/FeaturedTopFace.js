const mongoose = require('mongoose');

const FeaturedTopFaceSchema = new mongoose.Schema({
    contestant_first: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NationalPratinidhiContestant'
    },

    contestant_second: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NationalPratinidhiContestant'
    },

    priority: { type: Number, default: 0 }

}, { timestamps: true });

FeaturedTopFaceSchema.index({ priority: 1 });

module.exports = mongoose.model('FeaturedTopFace', FeaturedTopFaceSchema);
