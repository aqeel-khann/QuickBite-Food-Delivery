import React from "react";
import { IMG_URl } from "../utils/constants";

function ResturantCard({props}) {
    // console.log(props.info);
    const { avgRating, name,cloudinaryImageId} = props.info
    const {deliveryTime}=props.info.sla
  return (
    <div className="w-3/12 m-7 cursor-pointer ">
      <div className="bg-white border-2 shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={IMG_URl+cloudinaryImageId}
            alt="Restaurant img"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="py-4 px-2 m-2 ">
          <div className="">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-gray-600">Rating { avgRating}</p>
            </div>
                      <p className="text-gray-600">Delivery: { deliveryTime }min</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantCard;
