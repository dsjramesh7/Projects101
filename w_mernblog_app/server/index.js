const express = require("express");
const cors = require("cors");
const app = express();
const blogRouter = require("./route/blog-route");

require("./db");
app.use(cors());

app.use(express.json());

app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => res.status(200).json({ message: "Hello world" }));

app.listen(5000, () => console.log("App is running at 5000"));
