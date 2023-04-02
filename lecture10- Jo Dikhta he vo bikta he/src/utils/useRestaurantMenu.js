/**
 * *************************creating a custom Hook *************************************
 * *** This hook will have it's own reconcillation process.
 * 
 * 
 */

import { useState,useEffect } from "react";
import { swiggy_menu_api_URL } from "../../const";

const useRestaurantMenu = (urlId)=>{

    //creating state 
    const [restaurant,setRestaurant]= useState(null);

     const getRestaurantMenu = async()=>{
        const URL = swiggy_menu_api_URL+urlId+"&submitAction=ENTER";
        console.log(URL);
        const data = await fetch(URL);
        const json = await data.json();
       
        setRestaurant(json.data);
    }

    useEffect(()=>{
        getRestaurantMenu();
    },[]); 
    
    return restaurant;// returning a state value 

}


export default useRestaurantMenu;
