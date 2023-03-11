//.env File Configuration
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const homeRoute = require("./routes/home");
const bodyParser = require("body-parser");
const Passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const mongoDBStore = require("connect-mongo");
const flash = require("connect-flash");

//MongoDB Models
const studentsModel = require("./models/students");

// const dbURL = "mongodb://127.0.0.1:27017/nustu";
const dbURL = process.env.DB_URL || "mongodb://127.0.0.1:27017/nustu";

mongoose.set("strictQuery", true);
mongoose.connect(dbURL);
const database = mongoose.connection;
database.on("error", console.error.bind(console, "Connection Error:"));
database.once("open", () => {
  console.log("Database Connected");
});

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "https://nustu.herokuapp.com");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Max-Age", "3600");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Credentials, Content-Type, Accept, X-Requested-With, remember-me, X-AUTHENTICATION, X-IP"
  );
  next();
});

//SECRET
const secret = "ThisIsASecret!";

//Mongo DB Store for Session
const store = new mongoDBStore({
  mongoUrl: dbURL,
  secret,
  touchAfter: 24 * 60 * 60,
  autoRemove: "native",
  stringify: false,
});

//Mongo DB Store Error
store.on("error", function (e) {
  console.log("SESSION STORE ERROR", e);
});

//Express Session
const sessionConfig = {
  store,
  name: "session",
  secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

//Express Session app.use()
app.use(session(sessionConfig));
app.use(flash());

//Passport app.use()
app.use(Passport.initialize());
app.use(Passport.session());
//Passport Settings
Passport.use(new LocalStrategy(studentsModel.authenticate()));
Passport.serializeUser(studentsModel.serializeUser());
Passport.deserializeUser(studentsModel.deserializeUser());

app.use("/", homeRoute);

//Listening Port
const port = process.env.PORT;
// const port = 8080;
app.listen(port);
