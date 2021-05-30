const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SalonServices = new Schema({
    salon_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number    
    }, 
},
    {
        timestamps: true,
    }
);
module.exports = salonServices = mongoose.model("SalonServices", SalonServices);