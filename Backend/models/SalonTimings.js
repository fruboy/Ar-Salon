const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SalonTimings = new Schema({
    salon_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    start_time: {
        type: String,
        required: true,
    },
    end_time: {
        type: String,
        required: true,
    },
    booked: {
        type: Boolean,
        default: false
    }, 
},
    {
        timestamps: true,
    }
);
module.exports = SalonTiming = mongoose.model("SalonTimings", SalonTimings);