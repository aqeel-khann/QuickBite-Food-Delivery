import React, { useEffect, useState } from 'react'
import ShimmerCard from './ShimmerCard'
import { useParams } from 'react-router-dom';
import { MENU_URl } from '../utils/constants';

function ResturantMenu() {
    const [menuInfo, setMenuInfo] = useState(null)

     const {id} = useParams();
     console.log(id);



    useEffect(() => {
      fetchMenu()  
    }, [])
    const fetchMenu = async () => {
       try {
         const response = await fetch(MENU_URl+id);
         const json = await response.json();
         //    console.log(json.data.cards[2].card.card.info.name);
         setMenuInfo(json?.data)
        } catch (error) {
            console.log("Error Fetching Resturant Menu", error);
        }
    }
    if(menuInfo===null) return <ShimmerCard/>
    const { name } = menuInfo?.cards[2]?.card?.card?.info
    // console.log(name);
  return (
      <div>Resturant Name: { name }</div>
  )
}

export default ResturantMenu