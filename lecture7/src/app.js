import React from "react"
import  ReactDOM  from "react-dom/client"
import Header from "../src/components/Header"
import Body from "./components/Body"
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import * as obj from "../src/components/Header";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";

const Tittle  = obj.Logo; // after export default we can rename any componet (either name exported or named exported)



// just a template of layout of body
//const BodyComponent = () => {
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







/*****
 * IMP Point to understand well and keep in mind for right implemenation 
 * *************  both above and below are same, in above we used destructuring and in below we used it directly as an object without destructuring********************
 */

// const RestaurantCard = (props)=>{
  
//     return ( <div className="card">"main": "index.js",
//         <img  src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.cloudinaryImageId }/>
//          <h3> {props.name}</h3>
//          <h3> {props.cuisines.join(", ")}</h3>
//          <h3> {props.lastMileTravelString} </h3>
         
//     </div>)
// }












const footer = <div><h1>footer</h1></div>


const LayoutComponent = ()=>(
    <>
       {Header()}
       <Outlet/>
       
    </> 
);


// defining and configuring router

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<LayoutComponent/>,
        errorElement:<Error/> ,  // defining an Error element which will be displayed if any error in route occurs
        children:[
         {
             path:"/",
             element:<Body/>
         },   
        {
            path:"/about",
            element:<About/>
        },
        
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:id",
            element:<RestaurantMenu/>
        }
    ] //listing different component that can be rendered inside this LayOutComponent(having constant header and footer Component) based on route
    },
    
]);


const root = ReactDOM.createRoot(document.querySelector("#root"));


//providing or implementing defined router in our Application
root.render(<RouterProvider router={appRouter} />)