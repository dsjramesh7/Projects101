import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context";
import axios from "axios";

const HomePage = () => {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

  const fetchAllBlogs = async () => {
    setPending(true);
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      const result = await response.data;
      if (result.blogsList) setBlogList(result.blogsList);
    } catch (error) {
      console.log("Error", error);
    }
    setPending(false);
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const handleDeleteBlog = async (getCurrentId) => {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;
    if (result?.message) {
      fetchAllBlogs();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Blog List
        </h1>

        {pending ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-blue-500 animate-pulse">
              Loading blogs...
            </div>
          </div>
        ) : blogList && blogList.length > 0 ? (
          <div className="space-y-6">
            {blogList.map((item) => (
              <div
                key={item._id}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {new Date(item.date).toLocaleString()}
                </p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleDeleteBlog(item?._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-xl text-center text-gray-500">No Blogs Found</h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
