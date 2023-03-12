import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div> 
         <h1>Oops!!</h1>
         <h2>An Error Occured.</h2>
         <h2>Error Status : {err.status}</h2>
         <h2>Error Description : {err.statusText}</h2>
        </div>
    )
}

export default Error;