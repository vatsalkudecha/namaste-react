import React from "react";
import { GITHUB_USER_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        bio: "Dummy bio",
        avatar_url: "Dummy url",
        login: "Dummy login",
      },
    };

    console.log("Child Constructor called");
  }

  // This will be called after the constructor and Render is performed for sibling level components
  // After render is done, DOM is updated
  // Then componentDidMount() method will be called
  // This same effect we can get using useEffect hook in functional components
  // *** DONT COMPARE ComponentDidMount() with useEffect() - NOT SAME ***
  // Call the API after component render is performed.
  async componentDidMount() {
    console.log("Child Component Did Mount called");

    const data = await fetch(GITHUB_USER_URL);
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update called")
  }

  componentWillUnmount() {
    console.log("Component Unmount called")
  }

  render() {
    console.log("Child Render called");
    const { name, bio, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} className="user-image" />
        <div>
          <h2>Name: {name}</h2>
          <p>Bio: {bio}</p>
          <h4>Github: @{login}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
