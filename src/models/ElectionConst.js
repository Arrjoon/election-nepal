const mongoose = require('mongoose');

const ElectionConstSchema = new mongoose.Schema({
    name: String,
    description: String,
    pradesh: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pradesh'
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'District'
    },
    const_no: Number,
    total_population: Number,
    voter_total_male: Number,
    voter_total_female: Number,
    elec_completed: {
        type: Boolean,
        default: false
    },
    photo: String,
    priority: Number,
    deleted_at: Date
}, { timestamps: true });

module.exports = mongoose.model('ElectionConst', ElectionConstSchema);
