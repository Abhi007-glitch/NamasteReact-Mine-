import React from "react"
import  ReactDOM  from "react-dom/client"

//logo
//home
//offer
//contact
//cart 
const LogoComponent = ()=>{
    return (
        <a href="/">
    <img alt="logo" className="logo" src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>
    </a>)};

const header = <div><h1>header</h1></div>
const HeaderComponet = ()=>{
    return (<div className="header">
           <LogoComponent/>
           <div className="nav-items">
           <ul >
            <li>home</li>
            <li>offer</li>
            <li>contact</li>
            <li>Cart</li>
           </ul>
           </div>
         
    </div>)
}


const RestaurantCard = ()=>{
    return ( <div>
        <img className="restrantlogo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb" />
         <h3> Name</h3>
         <h3> Rating stars</h3>
         <h3> cusines </h3>
    </div>)
}

// const BodyComponent = () => {
//   return(
//     /**
//      * 
//       restaurantCardList
//          restaurantCard
//             image 
//             Name 
//             rating stars
//             location
//               cusines
//      * 
//      * 
//      * 
//      * 
//      */
//   )
// }
const body =  <div><h1>body</h1></div>

const footer = <div><h1>footer</h1></div>


const LayoutComponent = ()=>(
    <>
       {HeaderComponet()}
    <RestaurantCard/>
    </> 
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<LayoutComponent/>)