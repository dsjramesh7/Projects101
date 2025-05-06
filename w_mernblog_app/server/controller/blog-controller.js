const mongoose = require("mongoose");
const Blog = require("../model/Blog");

//fetch blogs
const fetchBlogList = async (req, res) => {
  let blogsList;
  try {
    blogsList = await Blog.find();
  } catch (error) {
    console.log(error);
  }

  if (!blogsList) {
    return res.status(404).json({ message: "No Blogs found" });
  }
  return res.status(200).json({ blogsList });
};

// add new blog
const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreateBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreateBlog.save();
  } catch (error) {
    console.log(error);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlyCreateBlog.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.send(404).json({ message: error });
  }

  return res.status(200).json({ newlyCreateBlog });
};

//delete an existing blog
const deleteABlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not Found" });
    }

    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Unable to delete ! try again later" });
  }
};
