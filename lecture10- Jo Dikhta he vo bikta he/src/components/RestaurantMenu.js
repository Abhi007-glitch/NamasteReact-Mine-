import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { IMG_CDN_URL } from "./config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantHead from "./RestaurantHead";
import MenuCard from "./MenuCard";


const RestaurantMenu = ()=>{
    const params = useParams();
    const {id}= params;
    
    const restaurant = useRestaurantMenu(id);
    
  
   if (restaurant===null)
   {
    return (<Shimmer/>);
   }

    return ((<div className=" flex flex-col justify-center">

    <div >
        <RestaurantHead  key={restaurant?.data?.tid} className="shadow-lg" Name={restaurant?.data?.name} Rating={restaurant?.data?.avgRatingString} Location={restaurant?.data?.locality} cuisines = {restaurant?.data?.cuisines} cloudinaryImageId={restaurant?.data?.cloudinaryImageId}/>
    </div>

    <h1 className="font-bold text-2xl">Item Menu</h1>
      
       <div className=" flex flex-wrap p-4 m-4 justify-center ">
       
        {Object.values(restaurant.data.menu.items).map((e)=>{
           {/* return(<div className="menu-card" key={e.id}> 
           <h3> Food Name :{e.name}</h3>
           <h4>category : {e.category}</h4>
           <h4>Description : {e.description}</h4>
           <h4>Price : {e.price}</h4>
           <h4>isHealthy : {e.isHealthy?"Yes":"No"}</h4>
           <h4>isBestSeller : {e.isBestSeller?"yes":"No"}</h4>
           <h4>Veg : {e.isVeg}</h4>
           </div>) */}
           return(<MenuCard name={e?.name} price={e?.price} description={e?.description} cloudinaryImageId={e?.cloudinaryImageId} key={e?.uniqueId} />);
        })}
       </div>
    
    </div>
    ))
}

export default RestaurantMenu;

// https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId=87256
// https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId=89490