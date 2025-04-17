import React, { useEffect, useState } from "react";

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
      // console.log(result);
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
    <div>
      <div className="flex gap-4">
        <input
          className="border border-green-300 px-4 py-5"
          type="text"
          placeholder="Enter github profile username here..."
          name="search-by-username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-red-400 text-white px-2 py-4"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GitHubProfileFinder;
