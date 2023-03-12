const Shimmer = ()=>{
    return(<div className="restaurantCardList">{Array(14).fill("").map((e,index)=>(<div className="shimmer_card" key={index}></div>))}</div>)
}

export default Shimmer;