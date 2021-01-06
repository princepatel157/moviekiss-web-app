import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* navbar logo */}
      <Link to="/" className="logo_link">
        <h2 className="header_logo">MOVIEKISS</h2>
      </Link>

      {/* navbar search */}
      <div className="header_search">
        <input type="text" className="search_bar" hint="search" />
        <SearchIcon className="search_icon" />
      </div>

      {/* Links */}
      <div className="header_nav">
        <Link to="/" className="header_links">
          <div className="links">Bollywood</div>
        </Link>
        <Link to="/" className="header_links">
          <div className="links">Hollywood</div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
