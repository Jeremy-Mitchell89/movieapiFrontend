import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div id="navigation">
        <div className="nav-segment">
          <h3 id="title">Flix!</h3>
        </div>
        <div className="nav-segment">
          <Link className="nav-item" to="/nowplaying">
            Now Playing
          </Link>
          <Link className="nav-item" to="/comingsoon">
            Coming Soon
          </Link>
          <Link className="nav-item" to="/trending">
            Trending
          </Link>
          <Link className="nav-item" to="/search">
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
