const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Reminders = new Schema({
    customer_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    appointment_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    description: {
        type: String,
        required: false,
    } 
},
    {
        timestamps: true,
    }
);
module.exports = Reminder = mongoose.model("Reminders", Reminders);