const functions = require("firebase-functions");
const express = require("express");
const passport = require("passport");
const { json } = require("express");
require("./authentication/local.authentication");
require("./authentication/jwt.authentication");
const userRoutes = require("./routes/auth");
const { connect } = require("mongoose");

const app = express();

connect(
  `mongodb+srv://Aloni:1234@cluster0.xfwelvs.mongodb.net/BLAGAN?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

var corsOptions = {
  origin: "https://mentor-app-8b6bf.web.app/",
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(json());
app.use(passport.initialize());

app.use("/auth", userRoutes);

app.use("/api", passport.authenticate("jwt", { session: false }));

app.get("/api/users", function (req, res) {
  res.send("okay");
});

exports.api = functions.https.onRequest(app);
