
//logo
//home
//offer
//contact
//cart 
export const Logo = ()=>{
    return (
        <a href="/">
    <img alt="logo" className="logo" src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>
    </a>)};

const header = <div><h1>header</h1></div>

const Header = ()=>{
    return (<div className="header">
           <Logo/>
           <div className="nav-items">
           <ul >
            <li>home</li>
            <li>offer</li>
            <li>contact</li>
            <li>Cart</li>
           </ul>
           </div>
         
    </div>)
}


export default Header;