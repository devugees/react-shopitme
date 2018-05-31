const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const passport = require('passport');
const path = require('path');
require('./config/passport.js');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
var cors = require('cors');

// Connection to DB using .env File
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connection established");
});

db.on("error", (err) => {
  console.log('THIS',err);
});

// Using Body Parser Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static files such as images
const staticDirPath = path.resolve(__dirname + './../uploads');
console.log(staticDirPath);
app.use('/uploads', express.static(staticDirPath));

app.use('/', authRoutes);
app.use('/user',/*  passport.authenticate('jwt', {session: false}), */ userRoutes);

// Server Port
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});