import { useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile Functional Component</h1>
      <h2>Name:{props.name}</h2>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(1)}>Click Me</button>
    </div>
  );
};

export default Profile;
