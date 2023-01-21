import React from "react"
import  ReactDOM  from "react-dom";
const heading1 = React.createElement('h1',{"id":"heading1"},"hello React!");

const p1 = React.createElement('p',{"id":"para"}, "paragraph");

const container = React.createElement('div',{"id":"container"},[heading1,p1]);

const main = document.querySelector("#main");
console.log(main);

const root = ReactDOM.createRoot(document.querySelector("#main"));

root.render(container);


