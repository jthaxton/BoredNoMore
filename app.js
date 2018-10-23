const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const register = require("./routes/api/register");
const passport = require('passport');
require("./config/passport")(passport);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World"));
app.use(passport.initialize());

app.use("/api/users", users);
app.use("/api/events", events);
app.use("/api/register", register);

app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
