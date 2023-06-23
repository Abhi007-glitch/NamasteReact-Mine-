import useOfferData from "../utils/useOfferData";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";


const OfferComponent = ()=>{
  const data = useOfferData();
  console.log(data);
  if (data==null)
  {
    return <h1>Shimmer</h1>;
  }

  const detail = data.cards[0].data.data.message;
  const cardsArray = data.cards;
  cardsArray.splice(0,1);
  console.log( cardsArray );

  return (
    <>
   <div className="w-screen bg-[#99b9c0] h-2/6 flex  justify-center place-items-center ">
     <div className="py-3.5 px-4 h-1/2 w-1/3">
     <h1 className="lg:text-5xl md:text-4xl sm:text:3xl font-sans font-extrabold text-white">Offers for you </h1>
     <p className="text-[#434546] lg:text-xl md:text-md sm:text-sm">Explore top deals and offers exclusively for you!</p>
     </div>
     <div className="w-1/3 h-full ">
        <img src="https://res.cloudinary.com/dwy8lddht/image/upload/v1681892368/3my_b0veu6.jpg" className="object-contain h-full max-w-full" />
     </div>
     <div className="w:1/3 bg-[#99b9c0]">

     </div>
    </div>

    <div className="flex justify-center items-center ">
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 item-center">
        {
           cardsArray.map((item)=>{
            console.log(item.data.data.cusines);
            return (<Link to={"/restaurant/"+item.data.data.id} key={"/restaurant/"+item.data.data.id}>
                <RestaurantCard name={item.data.data.name} cuisines={item.data.data.cuisines} cloudinaryImageId={item.data.data.cloudinaryImageId} costForTwoString={item.data.data.costForTwoString} avgRating={item.data.data.avgRating} aggregatedDiscountInfo={item.data.data.aggregatedDiscountInfo} slaString={item.data.data.slaString} />
            </Link>)
           
          })
        }
    </div>
  
    </div>

    </>

  )

}

export default OfferComponent;