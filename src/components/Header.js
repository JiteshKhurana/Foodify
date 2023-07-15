import { useState } from "react";
import Logo from "../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img src={Logo} alt="logo" className="h-32" />
    </a>
  );
};

const Header = () => {
  const [isloggedIn, SetIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between">
      <Title />
      <div>
        <ul className="flex p-10 space-x-10">
          <Link to="/">
            <li className="hover:text-red-500">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-red-500">About</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-red-500">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="hover:text-red-500">Cart</li>
          </Link>
          <Link to="/instamart">
            <li className="hover:text-red-500">Instamart</li>
          </Link>
          <li>{isOnline ? "Online 🟢" : "Offline 🔴"}</li>
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
