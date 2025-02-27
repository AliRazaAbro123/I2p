require("dotenv").config(); // Load environment variables at the top

const express = require("express");
const indexRouter = require("./routes/index");
const path = require("path")

// Create Express App
const app = express()

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);


app.listen(process.env.PORT || 3001)