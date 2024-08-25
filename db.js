// const mongoose = require('mongoose')

// const connectToDb = async()=>{

//     mongoose.connect(process.env.mongooneUri)
//     .then((conn)=>{
//         console.log("Connected to MongoDB")
//     })
//     .catch(err => console.log(err))
// }
// module.exports=mongoose.connect
// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true, // optional depending on Mongoose version
    });
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
