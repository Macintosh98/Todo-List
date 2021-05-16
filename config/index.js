// import dotenv from 'dotenv';
const dotenv =require('dotenv')

dotenv.config();

// export default {
//   PORT: process.env.PORT | 5000,
//   MONGO_URI: process.env.MONGO_URI | "mongodb+srv://abhishek:abhishek@cluster0.gvwwg.mongodb.net/test?retryWrites=true&w=majority",
//   MONGO_DB_NAME: process.env.MONGO_DB_NAME | "test",
//   JWT_SECRET: process.env.JWT_SECRET
// };
const PORT= process.env.PORT | 5000;
const MONGO_URI= process.env.MONGO_URI | "mongodb+srv://abhishek:abhishek@cluster0.gvwwg.mongodb.net/test?retryWrites=true&w=majority";
const MONGO_DB_NAME= process.env.MONGO_DB_NAME | "test";
const JWT_SECRET= process.env.JWT_SECRET;