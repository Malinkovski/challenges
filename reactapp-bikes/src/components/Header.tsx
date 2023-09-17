import React from "react";

function Header() {
  return (
    <header>
      <section id="navbar-section">
        <div id="navbar" className="">
          <div className="inner-navbar">
            <div>
              <img src="./img/logo.png" alt="logo" />
            </div>
            <div>
              <ul className="navbar-options">
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">BIKES</a>
                </li>
                <li>
                  <a href="#">GEAR</a>
                </li>
                <li>
                  <a href="#">PARTS</a>
                </li>
                <li>
                  <a href="#">TIRES</a>
                </li>
                <li>
                  <a href="#">SERVICE-INFO</a>
                </li>
                <li>
                  <a href="#">CATALOGUES</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="icons">
                <div>
                  <a href="#" title="seach">
                    <i className="fas fa-shopping-bag"></i>
                  </a>
                </div>
                <div>
                  <a href="#" title="cart">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
