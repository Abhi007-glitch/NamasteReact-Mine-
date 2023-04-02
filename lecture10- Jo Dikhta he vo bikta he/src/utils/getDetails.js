export const getHeaderDetails = (restaurant)=>{

    const temp = restaurant?.cards[0]?.card?.card?.info;
    const HeaderDetails = {
       "name":temp?.name,
       "city":temp?.city,
       "cloudinaryImageId":temp?.cloudinaryImageId,
       "areaName":temp?.areaName,
       "costForTwoMessage":temp?.costForTwoMessage,
       "cuisines":temp?.cuisines,
       "avgRatingString":temp?.avgRatingString,
       "totalRatingsString":temp?.totalRatingsString,
       "maxDeliveryTime":temp?.sla?.minDeliveryTime,
       "lastMileTravelString":temp?.sla?.lastMileTravelString,
       "opened":temp?.availability?.opened,
       "id":temp?.id,
       "message":temp?.feeDetails?.message,
       
    }
    console.log("Temp value is ", HeaderDetails);
   return HeaderDetails;

};


export const getMenuDetails = (restaurant)=>{
     const temp = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
     console.log("Temprory ", temp);
};


