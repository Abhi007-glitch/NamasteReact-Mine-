import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { IMG_CDN_URL } from "./config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantHead from "./RestaurantHead";
import MenuCard from "./MenuCard";
import {getHeaderDetails} from "../utils/getDetails"
import AccordianComponent from "./Accordian";


const RestaurantMenu = ()=>{
    const params = useParams();
    const {id}= params;
    
    const restaurant = useRestaurantMenu(id);
    
    const headerData = getHeaderDetails(restaurant);
    const menuData = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    // menuData.splice(-2,2);
   

   if (restaurant===null)
   {
    return (<Shimmer/>);
   }
  
   console.log("Restaurant Menu");
   

    return ((<div className=" flex flex-col justify-center  items-center">

    <div className="w-2/3"  >
        <RestaurantHead opened={headerData.opened} key={headerData.id} className="shadow-lg" totalRatingsString={headerData?.totalRatingsString} Name={headerData?.name} Rating={headerData?.avgRatingString} areaName={headerData?.areaName} cuisines = {headerData?.cuisines} cloudinaryImageId={headerData?.cloudinaryImageId} costForTwoMessage={headerData?.costForTwoMessage} city={headerData?.city} message={headerData?.message} maxDeliveryTime={headerData?.maxDeliveryTime}/>
    </div>

  
      
       <div className=" flex flex-col justify-center items-center w-2/3 pt-6">
       
       {/* <div>
        {Object.values(restaurant.data.menu.items).map((e)=>{
           return(
           <MenuCard isBestSeller={e.isBestSeller} veg={e.isVeg} name={e.name} price={e.price} description={e.description} cloudinaryImageId={e.cloudinaryImageId}/>
           )
        })}
       </div> */}

       
     
       {(menuData).map((section,i)=>{ return(<AccordianComponent  key={i} data={section?.card?.card?.itemCards} type={section?.card?.card?.title}  />)})};
        
       </div>
       {/* <AccordianComponent data={menuData?.cards[1]?.card?.card?.itemCards} type={menuData?.cards[1]?.card?.card?.title} ></AccordianComponent> */}

       {/* <AccordianComponent  data={"data2 - askdnsjkfbjsnfjsbhdfbsdfbjsbdjfbsdfdsbfbds fjsd fdshfsdf dbsfsdfshdbfsdjf" } type={"type2"}></AccordianComponent>
       <AccordianComponent  data={"data3 - askdnsdasdasdsasa dasdsadasw dfsafsajkfbjsnfjsbhdfbsdfbjsbdjfbsdfdsbfbds fjsd fdshfsdf dbsfsdfshdbfsdjf" } type={"type3"}></AccordianComponent> */}
    </div>
    ))
}

export default RestaurantMenu;

// https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId=87256
// https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId=89490