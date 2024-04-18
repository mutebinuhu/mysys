const mongoose = require("mongoose");
const requestsSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    service:{
        type: String,
        required:true
    }, 
    prefferedDate:{
        type: Date,
    },
    prefferedTime:{
        type:String
    },
    status:{
        default:"new request"
    }
}, {
    timestamps: true
});

const Request = mongoose.model('Request', requestsSchema);
module.exports = Request;
