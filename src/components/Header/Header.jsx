import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/Vector.png";
import cart from "../../assets/Vector2.png";
import "./Header.css";
function Header() {
  return (
    <main>
      <div className="header">
        <div id="logo">
          <div>
            <img src={logo} alt="" />
          </div>
          <div id="Navitems">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Contacts</a>
          </div>
        </div>

        <div>
          <img src={cart} alt="" />
          <img src={search} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Header;
