import React from "react";

function Footer() {
  return (
    <footer>
      <section id="footer-section">
        <div className="inner-footer">
          <div className="social">
            <h3>Social share</h3>
            <ul className="filter-list">
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>

              <li>
                <i className="fab fa-instagram"></i>
              </li>

              <li>
                <i className="fab fa-twitter"></i>
              </li>

              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
            </ul>
          </div>
          <div className="event-info border-left">
            <h3>Event info</h3>
            <ul className="filter-list">
              <li>Enter Now</li>
              <li>Event Info</li>
              <li>Course Maps</li>
              <li>Race Pack</li>
              <li>Results</li>
              <li>FAQs</li>
              <li>Am I Regustered?</li>
            </ul>
          </div>
          <div className="Registration border-left">
            <h3>Registration</h3>
            <ul className="filter-list">
              <li>Volunteers</li>
              <li>Gallery</li>
              <li>Press</li>
              <li>Results</li>
              <li>Privacy Policy</li>
              <li>Service Plus</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="schedule border-left">
            <h3>Schedule</h3>
            <ul className="filter-list">
              <li>Gallery</li>
              <li>About</li>
              <li>Videos</li>
              <li>Results</li>
              <li>FAQs</li>
              <li>Results</li>
              <li>Velunteers</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
