const express = require("express");
const cors = require("cors");
const app = express();
require("./db");
app.use(cors());

app.use(express.json());

app.use("/api", (req, res) => {
  res.send("Hello");
});

app.use("5000", () => {
  console.log("Connected to server");
});
