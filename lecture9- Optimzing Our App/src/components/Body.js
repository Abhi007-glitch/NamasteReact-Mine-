import RestaurantCard from  "./RestaurantCard" // default import 
import { restaurantList } from "./config" // named import
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body =  ()=>{
    
    const [searchText,setSearchText] = useState("");
    const [restaurantFilterdData,setRestaurantFilterdData]= useState(restaurantList);
    const [restaurantData,setRestaurantData]= useState(undefined);
  
    
    // this below code show that toggle is a state variable that is returned by useState()

    const toggle = useState("false");// state variable
    const [toggleValue,setToggleValue] = toggle; // [react variable , function to change value of react variable]
    
    const FilterData = (searchText,restaurantFilterdData)=>{
           const filterData = restaurantFilterdData.filter((restaurant)=>{return restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())});
           return filterData;
    }
    
     //created a custom hook for is Online/Offline feature.
    const isOnline = useOnlineStatus();
    console.log(isOnline)
   
    if (!isOnline)
    {
      return (<h1>Opps!! you seems to be offline, please check your internet connection </h1>)
    }

    const getData = async()=>{const data = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurantFilterdData(json?.data?.cards[2]?.data?.data?.cards)}

    
    useEffect( ()=>{
      getData();
      console.log("UseEffect called ")
    },[])
      console.log("render");

    

      // condtional rendering - does not cause re-render (remeber this)
      //conditional rendering is done inside a render(); 

      // avoiding rending component (Early return)
      if (restaurantFilterdData===undefined)
      {
        return null;
      }

    


    return (restaurantData===undefined)?<Shimmer/>:(
       <>
        <div className="searchContainer">
           <input value={searchText} type="text" className="search-name" placeholder="Food/Hotel name" onChange={(e)=>{setSearchText( e.target.value)
             }} />
           <button className="search-btn"  type="submit" onClick={()=>{let data = FilterData(searchText,restaurantData);
            setRestaurantFilterdData(data);}
            } >Search</button>
        </div>
        <div className="restaurantCardList">
       
    {
      
      
     (restaurantFilterdData.length==0)?<h1>No Restaurant Matching Your Filter Found!!</h1> :restaurantFilterdData.map((restaurant)=>{   
              return (
             <Link to={"/restaurant/"+restaurant.data.id} key ={restaurant.data.id}>
               <RestaurantCard {...restaurant.data} />
              </Link> 
                )
                })
                
                
                } 
               {/* value passed from here above are combined together inside a object called as props which our Restaurant component recives actually   */}
               {/* don't use (data = {...restaurant.data}) */}
       </div>
       </>
       )
}


export default Body;