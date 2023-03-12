const RestaurantCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{
  // card element
    return ( <div className=" w-56 p-8 m-8 shadow-lg bg-pink-50 "> 
        <img  className="w-full " src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId }/>
         <h3 className="font-bold text-xl"> {name}</h3>
         <h3> {cuisines.join(", ")}</h3>
         <h3> {lastMileTravelString} </h3>
         
    </div>);
}

export default RestaurantCard;