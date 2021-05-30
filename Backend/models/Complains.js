const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Complains = new Schema({
    customer_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    salon_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    subject: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    }  
},
    {
        timestamps: true,
    }
);
module.exports = Complain = mongoose.model("Complains", Complains);