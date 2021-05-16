const express =require( 'express');
const mongoose =require( 'mongoose');
const path =require( 'path');
const cors =require( 'cors');
const bodyParser =require( 'body-parser');
const morgan =require( 'morgan');
const config =require( './config/index.js');



const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan('dev'));
// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// Connect to Mongo
mongoose
  .connect("mongodb+srv://abhishek:abhishek@cluster0.gvwwg.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require( './routes/api/auth'));
app.use('/api/users', require( './routes/api/items'));
app.use('/api/auth', require( './routes/api/users'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// export default app;
