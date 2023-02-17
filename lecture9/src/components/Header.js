
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
    <img alt="logo" className="logo" src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>
    </a>)};

const header = <div><h1>header</h1></div>




const Header = ()=>{
    const [status,setStatus] = useState(false);
   

   
    return (<div className="header">
           <Logo/>
           <div className="nav-items">
           <ul >
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>Cart</li>
           </ul>
           </div>
           {
            (status)?(<button onClick={()=>setStatus(false)}>Logout</button> ):(<button onClick={()=>setStatus(true)}>Login</button>)
           }   
    </div>)
}


export default Header;