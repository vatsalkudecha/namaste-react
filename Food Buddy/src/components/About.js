import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props) {
        super(props)

        // console.log("Parent Constructor called");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount called");
    }

    render() {
        // console.log("Parent Render called");
        return (
            <div>
                <h1>About</h1>
                <h2>Welcome to Food Buddy</h2>
                {/* <User name={"Vatsal"} location={"Ahmedabad"}/> */}
                <UserClass name={"Vatsal from class"} location={"Ahmedabad from class"} />
            </div>
        )
    }
}

export default About;