import React from "react";
import './navbar.css'

const NavTabs = (props) => (
    <div>
    <nav className="navbar1">
    <ul className="w-100 m-0">
        <li>Clicky Game</li>
        <li>{props.score >= 1 ? "Welcome!" : "Click an image to begin!"}</li>
        <li> Score: {props.score} Top Score: {props.topScore} </li>
    </ul>
  </nav>
  <header className="header">
  <h2 className="darkBlue">Clicky Game! <br></br>Click on an image to earn points, but don't click on any image more than once!</h2>
  </header>
</div>
);

export default NavTabs;
