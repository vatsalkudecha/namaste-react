import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "I am studying Namaste React"),
         React.createElement("h1", {}, "I am 2nd h1 tag")
        ]
    )
);

// console.log("Here")

// when we want to put this element in react dom we use ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);    // (object)

// render
root.render(parent);

// creating element is core react thing
// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello world from React!"
// );

// console.log(heading)

/*
<div id="parent">
    <div id="child">
        <h1>I am 1st h1 tag<h1>
        <h1>I am 2nd h1 tag<h1>
    </div>
</div>    

 React.createElement(React Object) => .render converts to => HTML(Browser understands)

 If you want to create sibling, instead of passing single child to attribute, 
 put multiple childs in an array
*/
