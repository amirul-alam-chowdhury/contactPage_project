import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src="/assets/logo.png"></img>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
