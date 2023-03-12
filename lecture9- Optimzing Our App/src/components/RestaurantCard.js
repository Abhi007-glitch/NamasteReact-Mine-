const RestaurantCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{
  
    return ( <div className="card">
        <img  src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId }/>
         <h3> {name}</h3>
         <h3> {cuisines.join(", ")}</h3>
         <h3> {lastMileTravelString} </h3>
         
    </div>)
}

export default RestaurantCard;