import { useSelector } from "react-redux";


const CartTotal = ()=>{
   
  const TotalCost = useSelector(store =>store.cart.total)/100;
    return(
      
        <div className="flex justify-around ">
            <div className=" w-1/2 flex flex-col text-zinc-400  justify-start items-end">
              <p className="text-xl ">Subtotal</p>
              <p>Tax (5%)</p>
              <p>Shipping</p>
              <p>Grand Total</p>
            </div>
            <div className=" w-1/2 flex flex-col justify-end  items-end">
              <p>Rs. {TotalCost}</p>
              <p>Rs. {(TotalCost*0.05).toFixed(2)}</p>
              <p>Rs. 15</p>
              <p>Rs. {(TotalCost+TotalCost*0.05+15).toFixed(2)}</p>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Checkout</button>
            </div>
        </div>


      
    )
}

export default CartTotal;