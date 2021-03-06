require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

// Importar a configuração do banco de dados (mongoose)
const db = require("./config/db.config");
// Invoca a função que realiza a conexão com o banco de dados
db();

const roomRouter = require("./routes/room.routes");
app.use("/", roomRouter);

const reviewRouter = require("./routes/review.routes");
app.use("/", reviewRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);
