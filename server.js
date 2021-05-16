// import app from './app.js';
// import config from './config/index.js';
const app = require("./app")
const config = require("./config")
const { PORT } = config;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
