const Message = require('../model/comment.model');

const router = require('express').Router();


//  Post a message
router.post('/client/sm',async(req,res)=>{

    try {
        const {name,mail,teleId, subject, message}=req.body;
        
        if (name , mail , subject ,message) {
            const newMsg = new Message({
                name,
                mail,
                teleId, 
                subject, 
                message
            });

            await newMsg.save();

            return res.status(201).json({success:true,message:'Thanks for your message 😊'});

        } else {
            return res.status(404).json({success:false, message:'Please fill the form 😊'});
        }

    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server error ☹️'});
    }

});


//  get all message
router.get('/client/msg',async(req,res)=>{

    try {
      const messages = await Message.find();

      if (messages.length > 0) return res.status(200).json({success:true, messages:messages.reverse()});
      else return res.status(404).json({success:false, message:"Haven't any message"});

    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server error ☹️'});
    }

});


//  get single message
router.get('/client/msg/:mId',async(req,res)=>{

    try {
        const {mId}=req.params;
      const message = await Message.findOne({_id:mId});

      if (message) return res.status(200).json({success:true, message});
      else return res.status(404).json({success:false, message:"Haven't any message"});

    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server error ☹️'});
    }

});


//  delete message message
router.delete('/client/deleteMsg/',async(req,res)=>{

    try {
        const {mId}=req.params;
      const message = await Message.findOneAndDelete({_id:mId});

      if (message) return res.status(200).json({success:true, message:' Message Deleted'});
      else return res.status(404).json({success:false, message:"Haven't any message"});

    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server error ☹️'});
    }

});


module.exports = router;
