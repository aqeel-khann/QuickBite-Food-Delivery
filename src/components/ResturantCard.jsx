import React from "react";
import { IMG_URl } from "../utils/constants";

function ResturantCard({ props }) {
  const { avgRating, name, cloudinaryImageId } = props.info;
  const { deliveryTime } = props.info.sla;

  return (
    <div className="bg-white mt-5 shadow-md rounded-lg overflow-hidden h-full flex flex-col">
      <img
        src={IMG_URl + cloudinaryImageId}
        alt="Restaurant img"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-700">Delivery: {deliveryTime} min</span>
          <span className="text-[#CD2835]">Rating: {avgRating}</span>
        </div>
      </div>
    </div>
  );
}

export default ResturantCard;
