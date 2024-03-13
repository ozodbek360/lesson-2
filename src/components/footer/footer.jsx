import "/css/footer.css";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="logos">
          <div className="icons">
            <div className="brands"> 
            <img src="/images/footer.svg" alt="" />
            <ul>
              <li>
                <a href="#">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul></div>
            <div className="text">
              <p>
                Createx Construction Bureau has been successfully operating in
                the USA construction market since 2000. We are proud to offer
                you quality construction and exemplary service. Our mission is
                to set the highest standards for construction sphere.
              </p>
            </div>
          </div>
          <div className="search">
            <h2>Let's stay in touch</h2>
            <div className="btn">
              <input type="text" placeholder="Your email address " />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="texts">
          <ul>
            <li>HEAD OFFICE</li>
            <li>Address 8502 Preston Rd. Inglewood, New York</li>
            <li>Call:(405) 555-0128</li>
            <li> Email: hello@createx.com</li>
            
          </ul>
          <ul>
            <li>WHO WE ARE</li>
            <li>About Us</li>
            <li>Available Positions</li>
            <li> Contacts</li>
            
          </ul> 
          <ul>
            <li>OUR EXPERIENCE</li>
            <li>Services</li>
            <li>Work</li>
            <li> News</li>
            
          </ul>
        </div>
        <h2>© All rights reserved. Made with <i class="fa-solid fa-heart"></i>by Createx Studio </h2>
      </div>
    </div>
  );
};

export default Footer;
