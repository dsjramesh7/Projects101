import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import Recipe from "../../components/single-recipe";

const FavouritePage = () => {
  const { favouritesList } = useContext(GlobalContext);
  // console.log("recipesList", recipesList);
  return (
    <div className="py-10 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => {
          return <Recipe key={item.id} item={item} />;
        })
      ) : (
        <h1>Nothing is added in favourites.</h1>
      )}
    </div>
  );
};

export default FavouritePage;
