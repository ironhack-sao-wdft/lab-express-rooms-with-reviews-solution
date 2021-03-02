require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const db = require("./config/db.config");

db();

const router = require("./routes/index.routes");
app.use("/", router);

const routerRoom = require("./routes/room.routes");
app.use("/", routerRoom);

const routerReview = require("./routes/review.routes");
app.use("/", routerReview);

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);
