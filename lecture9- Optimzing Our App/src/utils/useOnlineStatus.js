// 
//
/**
 * 
 * ********** Name of Hook must start by use keyword ********************
 *  A custom hook is just function which encapulate all the logic and data related to a particluar feature 
 * this new feature can be directly used any where by calling the hook 
 *  */ 

 import { useEffect, useState } from "react";

 const useOnlineStatus = ()=>{
     const [isOnline,setIsOnline]= useState(true);  // state can be defined *** inside *** online functional components 
    
     useEffect(()=>{
        
        const onlineUpdate = ()=>{
            setIsOnline(true)
        }
    
        const offlineUpdate = ()=>{
            setIsOnline(false)
        }
         
        window.addEventListener("online",onlineUpdate);
        window.addEventListener("offline",offlineUpdate);
        // function returned from useEffect act as cleanup function which runs on unmount of the component.
        return ()=>{

        //--------------------------This is Good practice - and a Senior Developer Code   -----------------------------
            //removing eventListner - always clear the mess that we create 
            window.removeEventListener("online",onlineUpdate);
            window.removeEventListener("offline",offlineUpdate);
        }
     },[]);

     return isOnline;
 }
 
 export default useOnlineStatus;