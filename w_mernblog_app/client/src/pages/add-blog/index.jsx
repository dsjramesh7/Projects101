import { useContext } from "react";
import { GlobalContext } from "../../../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlogPage = () => {
  const { formData, setFormData } = useContext(GlobalContext);
  const navigate = useNavigate();
  // console.log("formData", formData);

  const handleSaveBlogToDatabase = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/blogs/add", {
        title: formData.title,
        description: formData.description,
      });
      const result = await response.data;
      console.log("Success:", result);

      if (result) {
        setFormData({
          title: "",
          description: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log("We are here");
      console.error("Error saving blog:", error);
    }
  };
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Add Your New Blog
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              id="title"
              placeholder="Enter your blog title here..."
              value={formData.title}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  title: e.target.value,
                });
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="6"
              placeholder="Enter your blog content here..."
              value={formData.description}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  description: e.target.value,
                });
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            onClick={handleSaveBlogToDatabase}
            type="submit"
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Add New Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogPage;
