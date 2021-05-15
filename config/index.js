import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT | 5000,
  MONGO_URI: process.env.MONGO_URI | "mongodb+srv://abhishek:abhishek@cluster0.gvwwg.mongodb.net/test?retryWrites=true&w=majority",
  MONGO_DB_NAME: process.env.MONGO_DB_NAME | "test",
  JWT_SECRET: process.env.JWT_SECRET
};
