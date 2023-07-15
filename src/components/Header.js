import { useState } from "react";
import Logo from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img src={Logo} alt="logo" className="logo" />
    </a>
  );
};

const Header = () => {
  const [isloggedIn, SetIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <li>{isOnline ? "🟢" : "🔴"}</li>
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
