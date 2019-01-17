import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="bar">
        <div className='logo'>
          <Link to='/'>Lacrosse</Link>
        </div>
        <div className="navbar">
          <Link to="/">Home </Link>{ '|' }
          <Link to="/Auth"> Login </Link>{ '|' }
          <Link to="/StringMain"> String Menu </Link>{ '|' }
          <Link to="/Mens"> Mens </Link>{ '|' }
          <Link to="/Womens"> Womens </Link>{ '|' }
          <Link to="Cart"> Cart </Link>
        </div>
        <div className="hamburger">
          <p>-</p>
          <p>-</p>
          <p>-</p>
          <Link to="/">Home </Link>
          <Link to="/Auth">| Login </Link>
          <Link to="/StringMain">| String Menu </Link>
          <Link to="/Mens">| Mens </Link>
          <Link to="/Womens">| Womens </Link>
          <Link to="Cart">| Cart </Link>
        </div>
      </div>
    </div>
  );
}
