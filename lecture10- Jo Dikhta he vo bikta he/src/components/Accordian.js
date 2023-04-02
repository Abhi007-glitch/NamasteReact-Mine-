import { useState } from "react";
import MenuCard from "./MenuCard";
import RestaurantCard from "./RestaurantCard";

const AccordianComponent = ({data,type})=>{

    const [visible, setVisible] = useState(true);
    if (data==null)
    {
        return;
    }
    console.log(data);
    console.log("card" , data);
return (
<div className="flex-col  justify-center">
    
    <div className="flex flex-wrap  justify-around">
        <h1 className="from-bold text-xl">{type}</h1>
        <button onClick={()=>{setVisible((visible===true)?(false):true)}}  className="font-bold  mx-6 px-5 text-2xl">^</button>

        
    </div>


    {/* conditional rendering */}
    {/* Accordian */}
    {(visible===true )?
    (<div className="flex flex-wrap p-4 m-4 justify-center ">
{   
    (data).map((item)=>{
        
return <MenuCard key={item?.imageId} isVeg={item?.card?.info?.isVeg} name={item?.card?.info?.name} price={item?.card?.info?.price} description={item?.card?.info?.description} cloudinaryImageId={item?.card?.info?.imageId}/> })
}
    </div>):<></>}
  <div className="flex flex-wrap  justify-center">
  <div className="bg-gray-100 h-4 my-3 w-1/2 "></div>
  </div>
    
    
</div>
);
}

export default  AccordianComponent;