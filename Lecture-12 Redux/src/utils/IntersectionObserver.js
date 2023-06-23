import React, {useState,useEffect, useRef} from "react";

const InfiniteScrollExample = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
  
   
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&offset=${page}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`);
      const data = await response.json();
  
      setItems(prevItems => [...prevItems, ...data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }

   }

   useEffect(()=>{
      fetchData();
   },[]);