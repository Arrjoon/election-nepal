const mongoose = require('mongoose');

const NationalContestantSchema = new mongoose.Schema({
    type_of_position: {
        type: Number,
        enum: [1, 2],
        default: 1
    },

    name: { type: String, required: true },

    party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party',
        required: true
    },

    gender: {
        type: Number,
        enum: [1, 2, 3],
        default: 1
    },

    constituency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ElectionConst',
        required: true
    },

    is_heavyweight: { type: Boolean, default: false },
    age: { type: Number, default: 0 },

    ec_id: Number,
    photo: String,

    political_involvement: String,
    current_position: String,
    educational_qualification: String,

    votes: { type: Number, default: 0 },
    votes_i: String,

    hasWon: { type: Boolean, default: false },
    isNew: { type: Boolean, default: false },

    deleted_at: { type: Date, default: null }

}, { timestamps: true });

NationalContestantSchema.index({ constituency: 1 });
NationalContestantSchema.index({ party: 1 });
NationalContestantSchema.index({ votes: -1 });

module.exports = mongoose.model('NationalPratinidhiContestant', NationalContestantSchema);
