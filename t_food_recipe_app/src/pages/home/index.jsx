import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import Recipe from "../../components/single-recipe";

const HomePage = () => {
  const { recipesList, loading } = useContext(GlobalContext);
  // console.log("recipesList", recipesList);
  return (
    <div className="py-10 container mx-auto flex flex-wrap justify-center gap-10">
      {loading ? (
        <h1>Loading wait....</h1>
      ) : recipesList && recipesList.length > 0 ? (
        recipesList.map((item) => {
          return <Recipe key={item.id} item={item} />;
        })
      ) : (
        <h1>Nothing to Show, Search </h1>
      )}
    </div>
  );
};

export default HomePage;
