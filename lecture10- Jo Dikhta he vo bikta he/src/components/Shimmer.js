const Shimmer = ()=>{
    return(<div className="flex flex-wrap justify-center p-5 m-5">{Array(14).fill("").map((e,index)=>(<div className="bg-neutral-100 w-56 h-80 p-8 m-8 shadow-lg" key={index}></div>))}</div>)
}

export default Shimmer;