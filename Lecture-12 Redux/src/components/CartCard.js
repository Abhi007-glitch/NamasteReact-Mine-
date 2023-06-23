import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Slices/cartSlice";

const CartCard = ({
  count,
  name,
  price,
  id,
  cloudinaryImageId,
  isVeg,
  totalCost,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="  w-full  py-2 m-2 drop-shadow-lg transition border rounded-xl border-gray-200  ">
      <div className="flex justify-center items-center  py-2  w-full shrink-0">
        <div className=" w-1/2  flex justify-center item-center ">
          <div className=" w-7/12 justify-self-end  lg:w-52 lg:h-32 md:w-40 md:h-24 sm:w-30 sm:h-16">
            <img
              className="  object-contain h-full w-full"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                cloudinaryImageId
              }
            />
          </div>
          <div className="justify-self-start lg:mt-4 md:mt-2 w-5/12 shrink-0 lg:mx-4 md:mx-2 sm:mx-1 mx-1">
            {isVeg === 1 ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoD0qDX71-VNZ40ujnq2m290VG6uauj21spw&usqp=CAU"
                className="w-4 h-4 object-cover"
              ></img>
            ) : (
              <img
                src="https://www.pngkit.com/png/full/257-2579552_non-veg-symbol-non-veg-symbol-png.png"
                className="w-4 h-4"
              ></img>
            )}

            <h1 className=" font-light text-xs lg:font-bold md:font-medium sm:font-medium lg:text-lg md:text-base sm:text-xs  ">
              {name}
            </h1>
            <p className="text-stone-400 lg:text-xl md:text-base text-xs">
              {" "}
              Rs. {price / 100}
            </p>
          </div>
        </div>
        <div className="flex w-1/2  justify-evenly h-10 ">
          <div className="flex w-1/3 border-2 border-gray-300 rounded-2xl justify-around">
            <div className=" flex justify-start w-1/3">
              <button
                className="text-xs lg:text-xl md:text-lg sm:text-sm"
                onClick={() => {
                  dispatch(
                    removeFromCart({
                      name: name,
                      id: id,
                      count: 1,
                      cloudinaryImageId: cloudinaryImageId,
                      price: price,
                    })
                  );
                }}
              >
                -
              </button>
            </div>

            <p className="text-xs lg:text-xl md:text-xl pt-2 lg:pt-0 md:pt-0 sm:pt-0 ">
              {count}
            </p>

            <div className=" flex justify-end w-1/3">
              <button
                className="text-xs lg:text-xl md:text-lg sm:text-sm"
                onClick={() => {
                  dispatch(
                    addToCart({
                      name: name,
                      id: id,
                      count: 1,
                      cloudinaryImageId: cloudinaryImageId,
                      price: price,
                    })
                  );
                }}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex w-2/3 justify-center">
            <h1 className="text-xs lg:text-xl md:text-xl pt-2 lg:pt-0 md:pt-0 sm:pt-0">
              {totalCost / 100}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
