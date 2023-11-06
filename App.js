import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         [React.createElement("h1", {}, "I am studying Namaste React"),
//          React.createElement("h1", {}, "I am 2nd h1 tag")
//         ]
//     )
// );

// console.log("Here")

// when we want to put this element in react dom we use ReactDOM
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(parent);    // (object)

// // render
// root.render(parent);

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

// ------------------Episode 3

// Earlier
// React.createElement => ReactELement - JS Object => rendered to HTMLElement

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // not an easy code to understand

// JSX: HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine by PARCEL - Babel's job to transpile)
// Babel: Takes your jsx code and coverts it into React code

// JSX => Babel transpiles the code to => React.createElement => JS Object => rendered to HTMLElement --(Babel is doing this)

// not pure JS (browser does not understands it)
// const heading = <h1 id="root">Namaste React from JSX</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(heading);

// ----------------------------------------------------------------
// React Component (2 types)
// 1: Class Component (Old way)
// 2: Functional Component (new way)

// React Functional Component -> Normal JS function which return JSX code

// const HeadingComponent2 = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };

const Title = () => (
  <h1 className="head">
    Namaste React from Title Component through Component Composition
  </h1>
);

const elem = <span> React Element </span>

const title = (
  <h1 className="head">
    Namaste React from title element through Component Composition 
    {elem}
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}   
    {title}
    <h1 className="heading">Namaste React from Functional Component</h1>
  </div>
);
// both above codes for Components are same

const root = ReactDOM.createRoot(document.getElementById("root"));

// How to render the Components
root.render(<HeadingComponent />);

/*
  - We can use React element inside React element
  - We can use React component inside Functional Component 
  - We can mix and match any thing
*/

// Read about Cross Site Scripting attack.
// Any code which we put inside {} curly braces, will not be directly run in our browser
// JSX will check and sanitize the code before executing