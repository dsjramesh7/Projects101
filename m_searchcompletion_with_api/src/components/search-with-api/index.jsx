import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SearchCompletionWithAPI = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    // console.log("query= ", query);
    if (query.length > 1) {
      const filteredData =
        userData && userData.length
          ? userData.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  useEffect(() => {
    fetchUsersDataFromAPI();
  }, []);

  const fetchUsersDataFromAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const result = await res.json();
      // console.log(
      //   "result",
      //   result.users.map((mooncolorwhite) => mooncolorwhite.firstName)
      // );
      if (result.user) {
        setUserData(
          result.users.map((mooncolorwhite) => mooncolorwhite.firstName)
        );
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  };

  console.log(userData);
  if (loading) {
    return <div>Loading Wait......</div>;
  }

  if (errorMsg) {
    return <div>{`Error => ${errorMsg}`}</div>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="search-user"
          placeholder="Search User Here..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchCompletionWithAPI;
