import RatingStar from "./RatingComponent";

const RestaurantHead = ({Name,cuisines,Location,Rating,cloudinaryImageId})=>{
   {console.log("inside head ", {Name,cuisines,Location,Rating,cloudinaryImageId})}
   return(
    <div className="flex justify-items-center p-4 m-2 shadow-lg bg-black">
    <div className=" shadow-lg rounded-lg w-96">
    <img className=" "src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
    </div>
   
    <ul className="px-4 py-6">
       <li ><h1 className="font-bold text-slate-100 text-xl">{Name}</h1></li>
       <li > <p className="text-gray-400">{cuisines}</p></li>
       <li><p className="text-gray-400 py-2 my-2">{Location}</p> </li>
       <li>
<div className="flex items-center text-gray-400">
     Rating :<RatingStar stars={Rating}/>
</div>
</li>
    </ul>
    
</div>
   )
  
};

export default RestaurantHead;
