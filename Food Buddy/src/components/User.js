import { useEffect, useState } from "react";

const User = ({ name, location }) => {

  const [count, setCount] = useState(0);

  // API Call
  useEffect(()=>{
    // getUserInfo();
    // Same we can do it in componentDidMount() for class based components;
  }, [])

  // async function getUserInfo() {
  //   const data = await fetch(GITHUB_USER_URL);
  //   const json = await data.json();
  //   console.log(json);
  // }

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
    </div>
  );
};

export default User;
