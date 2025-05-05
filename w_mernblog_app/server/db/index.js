const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://rkive:ANYTHING123Q1@blog-mern-app.hd2py8c.mongodb.net/`
  )
  .then(() => console.log("Blog Database connected successfully"))
  .catch((e) => console.log(e));
