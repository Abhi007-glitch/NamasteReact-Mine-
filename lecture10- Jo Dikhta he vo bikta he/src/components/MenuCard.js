const MenuCard = ({name,price,description,cloudinaryImageId})=>{
  return (<div className=" w-1/2 flex p-4 m-2 drop-shadow-lg  justify-between border rounded-xl border-gray-200  ">
    <div>
    <h1 className="font-bold ">{name}</h1>
     <p className="text-stone-400"> Rs. {price/100}</p>
     <p className="text-stone-400 py-3">{description}</p>
    </div>
    <div className="hover:focus-visible:">
      <img className="w-64 h-44 max-w-none md:w-48 md:h-32 sm:w-32 sm:h-24" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+cloudinaryImageId} />
    </div>
  </div>);
}

export default MenuCard;