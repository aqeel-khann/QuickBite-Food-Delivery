import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";

function Body() {
    const [resturantData, setResturantData] = useState([]);
    const [searchResturant, setSearchResturant] = useState([]);
    const [searchResturantButton, setSearchResturantButton] = useState("");
   

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9351929&lng=77.62448069999999&carousel=true&third_party_vendor=1`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            const resturant =json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setResturantData(resturant);
            setSearchResturant(resturant);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearchButton = (e) => {
        setSearchResturantButton(e.target.value);
    };

    const searchRes = () => {
        const filteredRestaurants = resturantData.filter((resturant) =>resturant.info.name.toLowerCase().includes(searchResturantButton.toLowerCase()));
        setSearchResturant(filteredRestaurants);
    };

    return resturantData.length === 0 ? (
      <ShimmerCard />
    ) : (
      <div className="w-full">
        <div className="w-4/5 mx-auto">
          <div className="w-4/5 mt-6 flex justify-center items-center space-x-4">
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
          <div className="w-full flex flex-wrap px-2 mb-4">
            {searchResturant.map((resturants) => (
              <Link className="w-/4 flex"
                key={resturants.info.id}
                to={"resturant/" + resturants.info.id}>
                <ResturantCard props={resturants} />
                  </Link>

                // <ResturantCard key={resturants.info.id} props={resturants} />
                
            ))}
          </div>
        </div>
      </div>
    );
}

export default Body;
