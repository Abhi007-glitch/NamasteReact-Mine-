//logo
//home
//offer
//contact
//cart

import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

export const Logo = () => {
  return (
    <a href="/" >
      <img
        alt="logo"
        className="h-20 w-20 p-4 lg:h-32 lg:w-32  md:h-24 md:w-24 sm:h-20 sm:w-20 object-cover bg-pink-50 borde"
        src="data:image/png;base64,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"
      />
    </a>
  );
};

const Header = () => {
  const [status, setStatus] = useState(false);
  const cartItems= useSelector(store=> store.cart.items);
  return (
    <div className="fixed top-0 z-50 w-full flex justify-center bg-pink-50 shadow-lg">
    <header className="flex w-5/6 justify-around item-cborder-b lg:mb-8  md:mb-4  mt-0 mb-2 bg-pink-50   ">
      <Logo />
      <div className="nav-items  w-10/12 lg:w-8/12 md:w-9/12 sm:9/12 flex flex-row-reverse justify-evenly text-xl font-medium ">
        <ul className="flex justify-around lg:py-10 md:py-7 sm:py:5 py-5 px-3 text-[#484b5c]  lg:w-10/12 md:w-10/12 sm:w-10/12 w-full ">
          <li className=" hover:text-[#ffa701] ">
            <Link to="/">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:w-4 sm:h-4 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <p className="lg:px-3 md:px-1 px-1 text-xs lg:text-xl md:text-lg sm:text-base">Search</p>
              </div>
            </Link>
          </li>

          <li className="lg:px-8 md:px-4 sm:px:2 px:2 hover:text-[#ffa701]">
            <Link to="/offer">
              <div className="flex  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 lg:w-6 lg:h-6 md:h-5 md:w-5 sm:w-4 sm:h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <p className="lg:px-3 md:px-1 px-0 text-xs lg:text-xl md:text-lg sm:text-base">Offer</p>
              </div>
            </Link>
          </li>

          <li className="lg:px-8 md:px-4 sm:px:2   hover:text-[#ffa701]">
          <div className="flex">
          <Link to="/about" className="text-xs lg:text-xl md:text-lg sm:text-base pt-0">About us</Link>
          </div>
          </li>

          <li className=" lg:px-8 md:px-4 sm:px:2 hover:text-[#ffa701]">
            <div className="flex ">
                <Link to="/cart" role="button" className="relative flex">
                  <svg className="flex-1 lg:w-8 lg:h-8 md:w-6 md:h-6 sm:h-5 sm:w-5 h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3 text-xs lg:text-sm md:text-sm sm:text-xs  top right p-0 m-0 text-white font-sans  leading-tight text-center">
                  {cartItems.length}
                  </span>
                </Link>
              
              <p className="text-xs lg:text-xl md:text-lg sm:text-base">Cart</p>
            </div>
          </li>
        </ul>
      </div>
    </header>
    </div>
    
  );
};

export default Header;
