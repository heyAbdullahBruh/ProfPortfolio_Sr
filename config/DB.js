const mongoose =require('mongoose');

const  CONNECT_DB=async (DBURI)=>{
    try {
        await mongoose.connect(DBURI);
          console.log('Connected to MongoDB')
    } catch (error) {
         console.error('Could not connect to DB', err.message);
    };
};


module.exports =CONNECT_DB;