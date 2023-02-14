import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { IMG_CDN_URL } from "./config";
const RestaurantMenu = ()=>{
    const params = useParams();
    const {id}= params;
    
    
    const [restaurant,setRestaurant]= useState(null);

    const getRestaurantMenu = async()=>{
        const URL = "https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId="+id;
        

        const data = await fetch(URL);
        const json = await data.json();
       
        setRestaurant(json);
    }  
    
    useEffect(()=>{
        getRestaurantMenu();
    },[]);
   if (restaurant===null)
   {
    return (<Shimmer/>);
   }

    return ((<div className="restaurant-menu"><div>
        <h1>Restaurant id :{restaurant?.data?.id}</h1>
        <h1>{restaurant?.data?.name}</h1>
        <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant?.data?.cloudinaryImageId}/>
        
        <h3>Rating : {restaurant?.data?.avgRatingString} Stars</h3>
        <h2>Cost for two pices {restaurant?.data?.costForTwoMsg}</h2>
    </div>
    {console.log(Object.values(restaurant.data.menu.items))}
    <div>
       <h1>MEnu to be displayed here</h1>
       <div>
        {Object.values(restaurant.data.menu.items).map((e)=>{
           return(<div className="menu-card"> 
           <h3> Food Name :{e.name}</h3>
           <h4>category : {e.category}</h4>
           <h4>Description : {e.description}</h4>
           <h4>Price : {e.price}</h4>
           <h4>isHealthy : {e.isHealthy?"Yes":"No"}</h4>
           <h4>isBestSeller : {e.isBestSeller?"yes":"No"}</h4>
           <h4>Veg : {e.isVeg}</h4>
           </div>)
        })}
       </div>
    </div>
    </div>
    ))
}

export default RestaurantMenu;

// https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId=87256
// https://www.swiggy.com/dapi/menu/v4/full?lat=21.2513844&lng=81.62964130000002&menuId=89490