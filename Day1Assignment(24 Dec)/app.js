const heading = React.createElement("h1",{id:"head"},"Namaste React!");
const heading2 = React.createElement("h2",{id:"head2"},"Hello World");
const container = React.createElement("div",{id:"main"},[heading,heading2]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);