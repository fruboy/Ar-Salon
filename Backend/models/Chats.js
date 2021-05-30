const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Chats = new Schema({
    customer_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    salon_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    message_body: {
        type: String
    },
    message_status:{type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
},
    {
        timestamps: true,
    }
);
module.exports = Chat = mongoose.model("Chats", Chats);