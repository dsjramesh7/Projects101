import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const DetailsPage = () => {
  const { id } = useParams();
  const { recipeData, setRecipeData, handleAddFavourite, favouritesList } =
    useContext(GlobalContext);

  const fetchOnlyRecipeDetails = async () => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const result = await response.json();
    // console.log(result?.data?.recipe);
    setRecipeData(result?.data?.recipe);
  };
  useEffect(() => {
    fetchOnlyRecipeDetails();
  }, []);
  // console.log(recipeData, "recipeDetailsData");
  return (
    <div>
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              src={recipeData?.image_url}
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm text-cyan-700 font-medium">
            {recipeData?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {recipeData?.title}
          </h3>
          <div>
            <button
              className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white cursor-pointer"
              onClick={() => handleAddFavourite(recipeData)}
            >
              {favouritesList.length &&
              favouritesList.findIndex(
                (item) => item?.id === recipeData?.id
              ) !== -1
                ? "Remove From Favourites"
                : "Add To Favourites"}
            </button>
          </div>
          <div>
            <span className="text-2xl font-semibold text-black">
              Ingredients:
            </span>
            <ul className="flex flex-col gap-3">
              {recipeData?.ingredients.map((ingredient) => (
                <li>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
