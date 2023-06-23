
import { useSelector } from "react-redux"
import CartCard from "./CartCard";
import CartTotal from "./CartTotal";


const Cart = ()=>{
    const cartItems = useSelector(store=> store.cart.items);
   
    return(cartItems.length===0)?<></>:(<div className="flex flex-col  justify-center items-center">
          <div className="flex w-3/4 ">
          <div className="flex w-1/2 justify-start items-center">
          <h1 className="text-smlg:text-4xl md:text-2xl sm:text-lg"> Cart Items</h1>
          </div>
          <div className="w-1/2 text-xl font-light flex justify-evenly items-end lg:mr-6 md:mr-4 sm:mr-2 mr-0 "> 
            <h1 className="text-sm lg:text-2xl md:text-lg sm:text-sm w-1/3 ">Count</h1>
            <h1 className="text-sm lg:text-2xl md:text-lg sm:text-sm lg:mr-10 md:mr-4 sm:mr-3 mr-2
             ">Total</h1>
         </div>
          </div>

          <div className="flex flex-col justify-center item-center w-3/4">
          {
            cartItems.map((item)=><CartCard id={item?.id} count={item?.count} isVeg={item?.isVeg} name={item?.name} price={item?.price}  cloudinaryImageId={item?.cloudinaryImageId} totalCost={item?.totalCost}/>)
          }

          </div>
        
          <div className="flex w-1/4 justify-end items-end">
            <CartTotal TotalCost={1500}/>
          </div>


         </div>
          )
}

export default Cart;