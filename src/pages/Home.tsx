import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full">
      <h1 className="font-bold text-7xl pb-5 text-sky-600">Welcome !</h1>
      <p className="py-5 text-center text-lg">
        This site will provide you a list of all continents on earth.
        <br />
        If you click on one of the continents, you will be able to see all the
        countries on this continent.
        <br />
        And if you click on one of the countries, you will have some
        informations like the capital, the currency or the flag of the country
      </p>
      <NavLink
        to={"/continents"}
        className="mt-5 text-xl border-2 p-4 rounded-xl text-white bg-sky-600"
      >
        <p>Click here</p>
      </NavLink>
    </div>
  );
};

export default Home;
