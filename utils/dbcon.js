const mongoose = require('mongoose');

const connectDB=async()=>{
    mongoose.connect(process.env.DB_STRING).then(() => {console.log('DB is connected')}).catch(err=>console.log(err.message));
}

module.exports={connectDB}