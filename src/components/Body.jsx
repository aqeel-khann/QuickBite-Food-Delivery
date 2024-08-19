import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useFetchResList from "../utils/useFetchResList";

function Body() {
  const [searchResturantButton, setSearchResturantButton] = useState("");
  //custom hook
  const { resturantData, searchResturant } = useFetchResList();
  const [filteredResturants, setFilteredResturants] = useState([]);

  useEffect(() => {
    setFilteredResturants(searchResturant);
  }, [searchResturant]);

  const handleSearchButton = (e) => {
    setSearchResturantButton(e.target.value);
  };

  const searchRes = () => {
    const filteredRestaurants = resturantData.filter((resturant) =>
      resturant.info.name
        .toLowerCase()
        .includes(searchResturantButton.toLowerCase())
    );
    setFilteredResturants(filteredRestaurants);
  };

  return resturantData.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="w-full">
      <div className="w-4/5 mx-auto">
        <div className="w-full mt-6 flex justify-center items-center space-x-4">
          <p className="text-2xl font-semibold">See All Restaurants</p>
          <input
            className="border-2 hover:border-red-500 outline-none border-gray-300 rounded-lg w-2/4 p-2"
            type="search"
            name="search"
            id="search"
            placeholder="Search for restaurants"
            onChange={handleSearchButton}
            value={searchResturantButton}
          />
          <button
            className="bg-[#CD2835] hover:bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#CD2835]-600"
            type="button"
            onClick={searchRes}
          >
            Search
          </button>
        </div>
        <div className="w-full flex flex-wrap justify-center px-2 mb-4">
          {filteredResturants.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"resturant/" + resturant.info.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <div className="h-full">
                <ResturantCard props={resturant} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
