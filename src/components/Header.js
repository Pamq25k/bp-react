import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header
        className="site-header"
        style={{ height: "62px" }}
        ref={this.headerRef}
      >
        <div className="wrapper">
          <div className="site-header__logo">
            <h1 className="site-header__logo-text">Bands Merch</h1>
            <img src="/assets/images/nadi2.gif" alt="" />
          </div>
          <div className="site-header__menu-icon" data-state="closed">
            <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
          </div>
          <div className="site-header__menu-section">
            <nav className="main-nav">
              <ul>
                <li>
                  <Link to="/">Songs</Link>
                </li>
                <li>
                  <Link to="/">Archive</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Policies</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
