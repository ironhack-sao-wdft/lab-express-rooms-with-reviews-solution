require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

const db = require("./config/db.config");
db();

// routes
const router = require("./routes/index.routes");
app.use("/", router);

const roomsRouter = require("./routes/room.routes");
app.use("/", roomsRouter);

app.listen(Number(process.env.PORT), () =>
    console.log(`Server running at port ${process.env.PORT}.`));