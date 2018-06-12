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
const os = require('os');
const ifaces = os.networkInterfaces();
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
app.use('/uploads', express.static(staticDirPath));
app.use('/', authRoutes);
app.use('/user',/*  passport.authenticate('jwt', {session: false}), */ userRoutes);

// Add the current IP to the Index of the server
let serverIPAdress = 'module OS is not working'
Object.keys(ifaces).forEach(ifname => {
  let alias = 0;
  ifaces[ifname].forEach(iface => {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      serverIPAdress = iface.address
    }
    ++alias;
  });
});

// Server Port
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server running on ${serverIPAdress}:${PORT}`);
});