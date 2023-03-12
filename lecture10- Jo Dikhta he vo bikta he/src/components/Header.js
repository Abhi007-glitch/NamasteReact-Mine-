
//logo
//home
//offer
//contact
//cart 

import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Logo = ()=>{
    return (
        <a href="/">
    <img alt="logo" className="h-32 w-32 drop-shadow-md p-4" src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>
    </a>)};

const header = <div><h1>header</h1></div>




const Header = ()=>{
    const [status,setStatus] = useState(false);
   

   
    return (<div className="flex justify-between bg-pink-50 shadow-lg ">
           <Logo/>
           <div className="nav-items">
           <ul  className="flex py-10">
            <li className="px-8"><Link to='/'>home</Link></li>
            <li className="px-8"><Link to='/about'>About us</Link></li>
            <li className="px-8"><Link to='/contact'>Contact</Link></li>
            <li className="px-8">Cart</li>
           </ul>
           </div>
           {
            (status)?(<button onClick={()=>setStatus(false)}>Logout</button> ):(<button onClick={()=>setStatus(true)}>Login</button>)
           }   
    </div>)
}


export default Header;