import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
  console.log("searchParam: ", searchParam);
  return (
    <nav className="flex flex-col justify-between items-center py-8 container mx-auto lg:flex-row gap-5 lg:gap-0">
      <h1 className="text-2xl font-semibold">
        <NavLink to={"/"}>
          Food<span className="text-red-400">Mania</span>
        </NavLink>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          type="text"
          name="search"
          placeholder="Search Food here..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-red-300 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-red-300 duration-300"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
