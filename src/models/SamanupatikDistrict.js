const mongoose = require('mongoose');

const SamanupatikDistrictSchema = new mongoose.Schema({
    party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party'
    },

    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },

    votes_pratinidhi: { type: Number, default: 0 },
    votes_pradesh: { type: Number, default: 0 },

    deleted_at: { type: Date, default: null }

}, { timestamps: true });

module.exports = mongoose.model('SamanupatikDistrict', SamanupatikDistrictSchema);
