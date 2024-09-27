import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || '';

const connectDB = ()=>{

  mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
  
} 
export default connectDB