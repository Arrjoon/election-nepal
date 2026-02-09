const mongoose = require('mongoose');

const DistrictSchema = new mongoose.Schema({
    name_nepali: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true
    },
    description: String,
    location_type: {
        type: Number,
        enum: [1,2,3,4],
        default: 1
    },
    latitude: Number,
    longitude: Number,
    priority: {
        type: Number,
        default: 0
    },
    nirwachan_id: Number,
    nirwachan_dist_name: String,
    color: String,
    photo: String,

    deleted_at: {
        type: Date,
        default: null
    }
}, { timestamps: true });

module.exports = mongoose.model('District', DistrictSchema);
