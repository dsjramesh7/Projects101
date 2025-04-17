import React, { useEffect, useState } from "react";
import User from "../user-show";

const GitHubProfileFinder = () => {
  const [userName, setUserName] = useState("dsjramesh7");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchGithubData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const result = await response.json();
      console.log(result);
      if (result) {
        setUserData(result);
      }
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  const handleSubmit = () => {};

  if (loading) {
    return <h1>Loading Data wait........</h1>;
  }
  if (errorMsg) {
    return <h1>{`Error => ${errorMsg}`}</h1>;
  }

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        GitHub Profile Finder 🚀
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex items-center gap-3 mb-8"
      >
        <input
          className="flex-grow px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm text-gray-700"
          type="text"
          placeholder="Enter GitHub username..."
          name="search-by-username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          type="submit"
          className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow transition duration-200"
        >
          Search
        </button>
      </form>

      {loading && (
        <p className="text-xl text-gray-600 animate-pulse">
          Loading data, please wait...
        </p>
      )}

      {errorMsg && (
        <div className="text-red-600 text-lg font-medium bg-red-100 px-4 py-3 rounded-xl shadow">
          Error: {errorMsg}
        </div>
      )}

      {userData && <User user={userData} />}
    </div>
  );
};

export default GitHubProfileFinder;
