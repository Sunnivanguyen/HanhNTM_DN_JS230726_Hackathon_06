require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path");

const Router = require("./src/routes/index");

// const Todo = require("./src/models/todo.model");
// const User = require("./src/models/user.model");
const connectMysql = require("./src/configs/db.config");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,DELETE,POST",
  })
);

// // Serving static files
// app.use(express.static(path.join(__dirname, "public")));

// app.use(
//   "api/v1/photos",
//   express.static(path.join(__dirname, "src/public/photo"))
// );

Router(app);

// Todo.sync({ force: true }).then(() => {
//   console.log("Todo Table Created");
// });
// User.sync({ force: true }).then(() => {
//   console.log("User Table Created");
// });

const port = process.env.APP_PORT;
app.listen(port, async () => {
  try {
    await connectMysql.authenticate();
    console.log("connect mysql successfully");
    console.log(`server running on port http://localhost:${port}`);
  } catch (error) {
    console.log("err", error);
  }
});
