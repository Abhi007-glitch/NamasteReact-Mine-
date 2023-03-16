import RatingStar from "./RatingComponent";

const RestaurantHead = ({Name,cuisines,Location,Rating,cloudinaryImageId,costOfTwo})=>{
   {console.log("inside head ", {Name,cuisines,Location,Rating,cloudinaryImageId})}
   let str="";
   for (let i =0; i<cuisines.length-1;i++)
   {
      str += cuisines[i];
      str+= ", ";
   }
   str+=cuisines[cuisines.length-1];
   return(
    <div className="flex justify-center p-4 m-2 shadow-lg bg-black">
    <div className=" shadow-lg rounded-lg w-96 mx-6">
    <img className=" px-6 rounded-lg"src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
    </div>
   
    <ul className="px-4 py-6">
       <li ><h1 className="font-bold text-slate-100 text-xl">{Name}</h1></li>
       <li > <p className="text-gray-400">{str}</p></li>
       <li><p className="text-gray-400 py-2 my-2">{Location}</p> </li>
       <li>
<div className="flex items-center text-gray-400">
     Rating :<RatingStar stars={Rating}/> 
     <div className="mx-4 flex ">
       <h className="font-thin text-2xl mx-2">|</h>
       <h className="px-3"> 20 Min</h>
     </div>
     <div className="mx-4 flex ">
       <h className="font-thin text-2xl">|</h>
       <h className="px-3">{costOfTwo} </h>
     </div>
</div>
</li>
    </ul>
    
</div>
   )
  
};

export default RestaurantHead;
