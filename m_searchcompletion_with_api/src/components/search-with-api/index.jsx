import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SearchCompletionWithAPI = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchUsersDataFromAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const result = await res.json();
      console.log("result", result.users);
      if (result.user) {
        setUserData(result.users);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersDataFromAPI();
  }, []);

  if (loading) {
    return <div>Loading Wait......</div>;
  }

  if (errorMsg) {
    return <div>{`Error => ${errorMsg}`}</div>;
  }
  return <div>SearchCompletionWithAPI</div>;
};

export default SearchCompletionWithAPI;
