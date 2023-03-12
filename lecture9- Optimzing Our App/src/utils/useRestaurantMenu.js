/**
 * *************************creating a custom Hook *************************************
 * *** This hook will have it's own reconcillation process.
 * 
 * 
 */

import { useState,useEffect } from "react";

const useRestaurantMenu = (urlId)=>{

    //creating state 
    const [restaurant,setRestaurant]= useState(null);

     const getRestaurantMenu = async()=>{
        const URL = "https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId="+urlId;
        const data = await fetch(URL);
        const json = await data.json();
       
        setRestaurant(json);
    }

    useEffect(()=>{
        getRestaurantMenu();
    },[]); 
    
    return restaurant;// returning a state value 

}


export default useRestaurantMenu;
