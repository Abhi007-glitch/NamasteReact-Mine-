import RatingStar from "./RatingComponent";

const RestaurantHead = ({Name,cuisines,areaName,Rating,cloudinaryImageId,costForTwoMessage,city,totalRatingsString,message,maxDeliveryTime})=>{

   let str="";
   for (let i =0; i<cuisines.length-1;i++)
   {
      str += cuisines[i];
      str+= ", ";
   }
  
   str+=cuisines[cuisines.length-1];
   return(
    <div className="flex justify-center items-center p-2 shadow-lg bg-black">
    <div className=" shadow-lg rounded-lg w-96 lg:mx-6  md:mx-3 ">
    <img className=" lg:px-6  md:px-3 rounded-lg object-cover"src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
    </div>
   
    <ul className="lg:px-4 md:px-2 lg:py-6 md:py-3">
       <li ><h1 className="font-bold text-slate-100 text-xl">{Name}</h1></li>
       <li > <p className="text-gray-400">{str}</p></li>
       <li className="my-2 py-2"><div className="flex"> <p className="text-gray-400 ">{areaName}</p> <p className="text-gray-400 ">{", "+ city}</p> </div>  </li>
       <li></li>
       <li></li>
       <li>
<div className="flex items-center text-gray-400">
     Rating :<RatingStar stars={Rating}/> 
     <div className="lg:mx-4 md:mx-2 flex ">
       <h1 className="font-thin text-2xl mx-2">|</h1>
       <h1 className="lg:px-3 "> {maxDeliveryTime+" min"} </h1>
     </div>
     <div className="mx-4 flex ">
       <h1 className="font-thin text-2xl">|</h1>
       <h1 className="px-3 ">{costForTwoMessage} </h1>
     </div>
</div>
</li>
<li><p className="text-gray-400 ">{totalRatingsString}</p> </li>
<li><p className="text-gray-400">{message}</p></li>
    </ul>
    
</div>
   )
  
};

export default RestaurantHead;
