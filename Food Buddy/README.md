# Food Buddy

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
-      - RestaurantCard
-          - Img
-          - Name of Restaurant, star ratings, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

2 types of Export/Import:

--> Default Export/Import

- export default Component;
- import Component from "path";

--> Named Export/Import

- export const Component;
- import {Component} from "path";

---

-> when you want to give inline css in react
give it as JS object -------------------------
const styleCard = {
backgroundColor: "#f0f0f0"
}

---

console.log(resData.info.name);

console.log(props); Objects
{resName, cuisine} = props; Same - known as Destructuring
Direct pass the props in the component itself

- RestaurantCard = ({ resName, cuisine })

---

Props: We want to pass data dynamically to a component.
Props are just normal arguments to the functions

Config Driven UI
Loop over the restaurant card for the restaurant array - <RestaurantCard resData={resList[0]} />

Not using keys (not acceptable), throws warning <<<< index as key (acceptable, not recommeded) <<<< unique keys (Best)

/\*\*

- Can pass props also as: RestaurantCard = ({ resName, cuisine }) => {}
-
- it is similar to:
- - {resName, cuisine} = props
- \*/

const { resName, cuisine } = props; // Destructuring
