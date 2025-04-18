import { useState, useEffect } from "react";

const SearchCompletionWithAPI = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData = userData.filter((name) =>
        name.toLowerCase().includes(query)
      );
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    fetchUsersDataFromAPI();
  }, []);

  const fetchUsersDataFromAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const result = await res.json();
      if (result.users) {
        const firstNames = result.users.map((user) => user.firstName);
        setUserData(firstNames);
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  };

  if (loading)
    return (
      <div className="text-center p-6 text-blue-500">
        Loading, please wait...
      </div>
    );

  if (errorMsg)
    return (
      <div className="text-center p-6 text-red-500">{`Error: ${errorMsg}`}</div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <input
          type="text"
          name="search-user"
          placeholder="Search User Here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          onChange={handleChange}
        />

        {searchParam && (
          <p className="text-sm text-gray-500 mt-2">
            Searching for:{" "}
            <span className="font-medium text-blue-600">{searchParam}</span>
          </p>
        )}

        {showDropDown && (
          <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-md max-h-60 overflow-y-auto">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((name) => (
                <div
                  key={name}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                >
                  {name}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500 text-center">
                No matching users found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCompletionWithAPI;
