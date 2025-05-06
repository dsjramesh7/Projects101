const express = require("express");
const blogRouter = express.Router();

const {
  addNewBlog,
  deleteABlog,
  fetchBlogList,
  updateABlog,
} = require("../controller/blog-controller");

blogRouter.get("/", fetchBlogList);
blogRouter.post("/add", addNewBlog);
blogRouter.delete("/delete/:id", deleteABlog);
blogRouter.put("/update/:id", updateABlog);

module.exports = blogRouter;
