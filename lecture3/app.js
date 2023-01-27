import React from "react"
import  ReactDOM  from "react-dom/client"


const heading1 = (
  <h1>Namste React day 3</h1>
)

// console.log(heading1);
const heading2 = (
    <h1>Let's begin</h1>
)

// combining two react elememt inside another element using JSX - mine
const container =(<div>
    {heading2}
    {heading1}
</div>)

// combining using createElement
// const container = React.createElement("div",{"id":"temp"},[heading1,heading2])
// ***************************working of createElement -> ( returns object  -> convert to HTML element in DOM)**************

const jsx1 = <div> <h1> Hello</h1></div>


//need to put paranthesis when jsx is in multiple line
const jsx2 = (<div> 
   <h1> World</h1>
   </div>) 

// *******************working of jsx ( jsx-> createReact element formate-> return object -> convert to HTML element in DOM )********
// ************************************** above task of jsx to createElement is done by Bable **************************************************





/// componets - functional and class component
// funcitonal component - just a normal js function which returns a piece of HTML or JSX.
// ************Good Practice - should start with capital letters.

// react Element is an object while reaction functional componet is function

//formate 1 

const ExampleComponent = ()=>{
  return (<div><h1>Formate 1</h1></div>)
}


// formate 2
const ExampleComponent2 = ()=> (<div><h1>Formate 2</h1></div>); // production code -used formate in production

const CombinedComponent  = ()=> (<div>
  
<ExampleComponent/>
{ExampleComponent2()}   {/* or <ExampleComponent2/> both works the same */}

</div>) 



const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(container);

//redering React component
root.render(<CombinedComponent> </CombinedComponent>);
