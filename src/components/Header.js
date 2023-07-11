import { useState } from "react";
import Logo from "../assets/img/logo.jpeg";

const Title = () => {
  return (
    <a href="/">
      <img src={Logo} alt="logo" className="logo" />
    </a>
  );
};

const Header = () => {
  const [isloggedIn, SetIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {isloggedIn ? (
            <button onClick={() => SetIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => SetIsLoggedIn(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
