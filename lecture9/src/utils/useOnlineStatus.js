// 
//
/**
 * 
 * **********Name of Hook must start by use keyword ********************
 *  A custom hook is just function which encapulate all the logic and data related to a particluar feature 
 * this new feature can be directly used any where by calling the hook 
 *  */ 

import { useState } from "react";

const useOnlineStatus = ()=>{
    const [isOnline,setIsOnline]= useState(true);  // state can be defined *** inside *** online functional components 
    window.addEventListener("online",()=>{
        setIsOnline(true)
    })

    window.addEventListener("offline",()=>{
        setIsOnline(false)
    })

    return isOnline;
}

export default useOnlineStatus;