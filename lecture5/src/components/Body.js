import RestaurantCard from  "./RestaurantCard" // default import 
import { restaurantList } from "./config" // named import
import { useState } from "react"

const Body =  ()=>{
    
    const [searchText,setSearchText] = useState();

    // this below code show that toggle is a state variable that is returned by useState()

    const toggle = useState("false");// state variable
    const [toggleValue,setToggleValue] = toggle; // [react variable , function to change value of this react variable]
 
    return (
       <>
        <div className="searchContainer">
           <input value={searchText} type="text" className="search-name" placeholder="Food/Hotel name" onChange={(e)=>{setSearchText( e.target.value)
             }} />
           <button className="search-btn"  type="submit" onClick={()=>{setToggleValue((toggleValue==="false")?"true":"false")}} >Search</button>
        </div>
        <div className="restaurantCardList">
    {restaurantList.map((restaurant)=>{   
              return (
                <RestaurantCard {...restaurant.data} key ={restaurant.data.id}/>
                )
                
                })} 
               {/* value passed from here above are combined together inside a object called as props which our Restaurant component recives actually   */}
               {/* don't use (data = {...restaurant.data}) */}
       </div>
       </>
       )
}


export default Body;
