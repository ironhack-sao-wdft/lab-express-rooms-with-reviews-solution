require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin: `http://localhost:${process.env.CLIENT_PORT}` }));

const db = require("./config/db.config");
db();

// Routes
const router = require("./routes/index.routes");
app.use("/", router);

const roomsRouter = require("./routes/room.routes");
app.use("/", roomsRouter);

const reviewRouter = require("./routes/review.routes");
app.use("/", reviewRouter);

// Server listener
app.listen(Number(process.env.SERVER_PORT), () =>
    console.log(`Server running at port ${process.env.SERVER_PORT}.`));