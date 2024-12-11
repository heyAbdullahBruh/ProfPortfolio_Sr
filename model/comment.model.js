const { default: mongoose } = require("mongoose");

const msgSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    teleId:{
        type:String,
        required:true,
        default:' '
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },

},{timestamps:true});


const Message = mongoose.model('messages',msgSchema);

module.exports = Message;


