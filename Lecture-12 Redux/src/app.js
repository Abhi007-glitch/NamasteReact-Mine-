import React, { lazy, Suspense } from "react"
import  ReactDOM  from "react-dom/client"
import Header from "../src/components/Header"
import Body from "./components/Body"
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import * as obj from "../src/components/Header";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import OfferComponent from "./components/Offers";
import Cart from "./components/Cart"

import { Provider } from "react-redux";
import store from "./Redux/store"

const Tittle  = obj.Logo; // after export default we can rename any componet (either name exported or named exported)

/**
 * 
 * Performing Bundle Spliting or On Demand Loading or LazyLoading or Dynamic Loading or Dynamic import
 * Remeber all the Names 
 * 
 * 
 * 
 * 
 * **********  Step 1 : modifiy the all the import method of Component to be LazyLoaded or On demand Loading 
 *   
 * older code :
 *  import Component_Name from "Path of compnent"
 * 
 * new Code :
 * 
 * const Component_Name = lazy(()=>import("Path of Compoent")); 
 * 
 * 
 * *********  Step2 : modify the Component inside Router
 * 
 * const router = createBrowserRouter([
 * {
 *  {
 *   path:"Loading component route"
 *   element : <Suspense  fallback={Component to be displayed while bundle for the splitted component is being loaded or fetched }> 
 *              <Component_Name/>
 *            </Suspense>
 * }
 * }])
 * 
 * 
 */
 // ********************Note : LazyLoading should be never performed inside another compoent, it should be done on top just below other import statements ***************************/
 
 //****************** *********  PerForming Bundling/Chunking of About Componet ********************************/

 const About = lazy(()=>import("./components/About"));



const footer = <div><h1>footer</h1></div>


const LayoutComponent = ()=>(
    <div className=" flex-col justify-center items-center h-screen ">
       <Provider store={store}>
       <Header/>
       <div className="mt-24 lg:mt-44 md:mt-36">
        <Outlet/>
       </div>
     
       </Provider>
       
    </div> 
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
            element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
        },
        
        {
            path:"/offer",
            element:<OfferComponent/>
        },
        {
            path:"/restaurant/:id",
            element:<RestaurantMenu/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ] //listing different component that can be rendered inside this LayOutComponent(having constant header and footer Component) based on route
    },
    
]);


const root = ReactDOM.createRoot(document.querySelector("#root"));


//providing or implementing defined router in our Application
root.render(<RouterProvider router={appRouter} />)