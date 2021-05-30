const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Appointments = new Schema({
    salon_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    customer_id: {
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
    appointment_description: {
        type: String
    },
    status: {
        type: String,
    },
    appointment_date: {
        type: Date
    },
    paymentStatus:{
        type: String,
        required: true
    } 
},
    {
        timestamps: true,
    }
);
module.exports = Appointment = mongoose.model("Appointments", Appointments);