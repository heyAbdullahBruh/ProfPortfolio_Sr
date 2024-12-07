const express= require('express');
const cors= require('cors');

const app =express();

// middleware duction calling---->
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));



// home route
app.get('/',(req,res)=>{
    try {
        return res.status(200).json({success:true,message:`Hey.! This is Abdullah Shayed`});
    } catch (error) {
        return res.status(500).json({status:false,message:`Something went worng : ${error.message}`}); 
    }
});


// false route's error definder
app.use((req,res,next)=>{
    return res.status(404).json({status:false,message:'the route is not found'});
});


// server error definder
app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
      success:false,
      message: error.message || 'Internal Server Error'
    });
});








module.exports =app;