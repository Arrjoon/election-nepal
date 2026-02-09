const mongoose = require('mongoose');

const PartySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    logo: String,
    party_color: String,
    party_type: {
        type: Number,
        enum: [1,2],
        default: 1
    },
    pratinidhi_lead_count: { type: Number, default: 0 },
    total_pratinidhi_won: { type: Number, default: 0 },
    samanupatik_votes_pratinidhi: { type: Number, default: 0 },
    samanupatik_seats_pratinidhi: { type: Number, default: 0 },
    vote_count: Number,
    priority: { type: Number, default: 0 },
    deleted_at: Date
}, { timestamps: true });

module.exports = mongoose.model('Party', PartySchema);
