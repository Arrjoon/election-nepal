const mongoose = require('mongoose');

const PradeshSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    district: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'District'
    }],
    pradesh_color: String,
    priority: {
        type: Number,
        default: 1
    },
    pradesh_num: Number,
    deleted_at: Date
}, { timestamps: true });

module.exports = mongoose.model('Pradesh', PradeshSchema);
