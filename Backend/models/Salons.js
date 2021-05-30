const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Salons = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    join_date: {
        type: Date,
        default: Date.now,
    },
    address: {
        address_line1: {
            type: String,
            required: true
        },
        address_line2: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        }
    },
    geoLocation: {
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        }
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    pictures: {
        pic1: {
            type: String,
            required: true
        },
        pic2: {
            type: String,
            required: false
        },
        pic3: {
            type: String,
            required: false
        },
        pic4: {
            type: String,
            required: false
        },
        pic5: {
            type: String,
            required: false
        }
    },
    creditCard: {
        cardNumber: {
            type: Number,
            required: false
        },
        expiryMonth: {
            type: Number,
            required: false
        },
        expiryYear: {
            type: Number,
            required: false
        },
        cvv: {
            type: Number,
            required: false
        }
    },
    membership_plan: {
        type: mongoose.Types.ObjectId,
        required: false
    },
},
    {
        timestamps: true,
    }
);
module.exports = Salon = mongoose.model("Salon", Salons);