const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Customers = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
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
    phoneNumber: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
        required: true
    },
    creditCard: {
        cardNumber: {
            type: Number,
            required: true
        },
        expiryMonth: {
            type: Number,
            required: true
        },
        expiryYear: {
            type: Number,
            required: true
        },
        cvv: {
            type: Number,
            required: true
        }
    }
},
    {
        timestamps: true,
    }
);
module.exports = Customer = mongoose.model("Customer", Customers);