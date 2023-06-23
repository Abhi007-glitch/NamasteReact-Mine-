const RestaurantCard = ({name,cuisines,slaString,cloudinaryImageId,costForTwoString,avgRating,aggregatedDiscountInfo})=>{
  // card element
    return (<div className=" w-72 bg-base-100 my-5 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-105  p-4 m-4 ">
    
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="Hotel_Pic" className="rounded-xl object-cover" />
    
    <div className="flex-col justify-center items-center">
      <h2 className="from-neutral-700 font-medium text-xl">{name}</h2>
      <p className="text-sm text-stone-500 "> {cuisines.join(", ")}</p>
     
      <div className="flex justify-between">
        <div className={`my-2  w-9 h-5 m-1 text-white justify-center flex ${parseInt(avgRating)<4 ? "bg-orange-500": "bg-green-600"}  `}> 
           <svg aria-hidden="true" className="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
           <p className="text-sm">{avgRating}</p>
        </div>
        <li className="py-2 text-sm text-stone-600">{slaString}</li>
        <li className="p-2 text-sm text-stone-600" >{costForTwoString}</li>
      </div>

      {/* Juaggad */}
      {aggregatedDiscountInfo?.shortDescriptionList[0]?.meta!=undefined ?(<div><p className="text-clip text-gray-300 overflow-hidden font-extralight">___________________________________________</p>  <p className="text-orange-900  font-normal">{aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</p></div>
):(<></>) }
      
    </div>
    
  </div>);
}


export default RestaurantCard;