import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <header>
      <nav className="flexSB1">
        <ul
          className={click ? "mobile-nav" : "flexSB"}
          onClick={() => setClick(false)}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
        </ul>
        <button className="btn" onClick={() => setClick(!click)}>
          {click ? <p>close</p> : <p>show</p>}
        </button>
      </nav>
    </header>
  );
};

export default Header;
