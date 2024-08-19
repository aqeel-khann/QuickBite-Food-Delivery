import React, { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { MENU_URl } from "../utils/constants";
// import { Accordion } from "./ui/accordion";


 


function ResturantMenu() {
  const [menuInfo, setMenuInfo] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_URl + id);
      const json = await response.json();
      console.log("Menu is",json.data.cards);
      // console.log("Menu is", menuInfo?.cards[2]?.card?.card?.info);
      setMenuInfo(json?.data);
    } catch (error) {
      console.log("Error Fetching Resturant Menu", error);
    }
  };

  if (menuInfo === null) return <ShimmerCard />;

  const { name, avgRating, totalRatingsString, costForTwoMessage } =
    menuInfo?.cards[2]?.card?.card?.info;

  return (
    <>
      <div className="max-w-2xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-2 text-center">{name}</h2>
        <div className="flex justify-center items-center mb-4">
          <span className="text-yellow-500 text-xl">⭐{avgRating}</span>
          <span className="ml-2 text-gray-700">({totalRatingsString})</span>
        </div>
        <div className="text-center">
          <span className="text-gray-700">{costForTwoMessage}</span>
        </div>
      </div>
      {/* <Accordion/> */}
      
    </>
  );
}

export default ResturantMenu;
