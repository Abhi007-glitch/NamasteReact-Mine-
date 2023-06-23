import { useState } from "react";
import MenuCard from "./MenuCard";
import RestaurantCard from "./RestaurantCard";

const AccordianComponent = ({data,type})=>{

    const [visible, setVisible] = useState(true);
    if (data==null)
    {
        return;
    }
 
return (
<div className="flex flex-col w-full justify-center items-center">
    
    <div className="flex flex-wrap w-full justify-around">
        <h1 className="from-bold text-xl">{type}</h1>
        <button onClick={()=>{setVisible((visible===true)?(false):true)}}  className="font-bold  mx-6 px-5 text-2xl">^</button>

        
    </div>


    {/* conditional rendering */}
    {/* Accordian */}
    {(visible===true )?
    (<div className="flex flex-col justify-center items-center w-full   ">
{   
    (data).map((item)=>{
        
return <>
   <MenuCard key={item?.card?.info?.id} id={item?.card?.info?.id} isVeg={item?.card?.info?.isVeg} name={item?.card?.info?.name} price={item?.card?.info?.price} description={item?.card?.info?.description} cloudinaryImageId={item?.card?.info?.imageId}/> 

            </>
        })
}
    </div>):<></>}

<div className=" h-5 w-full bg-zinc-200 my-8"> 
</div>
  
</div>
);
}

export default  AccordianComponent;