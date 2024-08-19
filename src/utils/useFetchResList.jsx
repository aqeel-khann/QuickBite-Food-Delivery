import  { useEffect, useState } from 'react'
import { RESTURANT_LIST } from './constants';

const useFetchResList = () => {
  const [resturantData, setResturantData] = useState([]);
  const [searchResturant, setSearchResturant] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTURANT_LIST);
      console.log("response is",response);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Resource not found");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      

      const resturant =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResturantData(resturant);
      setSearchResturant(resturant);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {resturantData,searchResturant};
}

export default useFetchResList