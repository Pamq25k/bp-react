import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="site-footer__sub">&copy; i want to die</p>
      <div className="site-footer__menu">
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-youtube site-footer__icon"></i>
              Youtube
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook-f site-footer__icon"></i>
              Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram site-footer__icon"></i>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
