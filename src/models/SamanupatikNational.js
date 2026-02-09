const mongoose = require('mongoose');

const SamanupatikNationalSchema = new mongoose.Schema({
    party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party'
    },

    constituency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ElectionConst'
    },

    votes_pratinidhi: { type: Number, default: 0 },
    votes_pradesh: { type: Number, default: 0 },

    deleted_at: { type: Date, default: null }

}, { timestamps: true });

module.exports = mongoose.model('SamanupatikNational', SamanupatikNationalSchema);
