const express = require('express');
const app = express();
const mongo = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
// const cookieParser = require('cookie-parser');
// const expressValidator = require('express-validator');
// const session = require('express-session');
// const passport = require('passport');
// const flash = require("connect-flash");
// const userRoutes = require("./routes/users");
// const adminRoutes = require("./routes/admin");
const path = require("path");
const moment = require('moment');

// Connection to DB using .env File
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connection established");
});

db.on("error", (err) => {
  console.log(err);
});

// Using Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world!")
});

// Server Port
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});