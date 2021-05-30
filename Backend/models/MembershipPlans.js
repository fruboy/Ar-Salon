const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MembershipPlans = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    }, 
},
    {
        timestamps: true,
    }
);
module.exports = MembershipPlan = mongoose.model("MembershipPlans", MembershipPlans);