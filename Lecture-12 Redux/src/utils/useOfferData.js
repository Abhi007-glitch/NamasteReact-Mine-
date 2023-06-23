import { useEffect, useState } from "react";
import { offer_api } from "../../const";
const  useOfferData = ()=>{
    
    const [offerData,setOfferData]= useState(null);
   
    const getData = async()=>{
        const data = await fetch(offer_api);
        const json = await data.json();
        setOfferData(json.data);
       };

    useEffect(()=>{getData();} ,[])

    return offerData;

}

export default useOfferData;