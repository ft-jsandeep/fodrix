import React from "react";
import { Link } from "react-router-dom";
import "../Footer.css";

export default function Topfooter() {
  return (
    <>
      <footer className="foooter">
        <div className="containerr ">
          <div className="roww ">
            <div className="footer-coll">
              <h4>Explore</h4>
              <ul>
                <li>
                  <Link to="/HowItWorks">How it works</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/packages">Packages</Link>
                </li>
                <li>
                  <Link to="/blogsread">Blogs</Link>
                </li>
                <li>
                  <Link to="/testimonial">Reviews</Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQs</Link>
                </li>
              </ul>
            </div>

            <div className="footer-coll ">
              <h4>Photographer</h4>
              <ul>
                <li>
                  <Link to="/BecomeFodrixographer">
                    Become a Fodrixographer
                  </Link>
                </li>
                <li>
                  <Link to="#">Fodrixographer Login</Link>
                </li>
              </ul>
            </div>
            <div className="footer-coll">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/about_us">About Us</Link>
                </li>
                <li>
                  <Link to="/Career">Careers</Link>
                </li>
                <li>
                  <Link to="/BecomePartner">Become our partner</Link>
                </li>
              </ul>
            </div>

            <div className="footer-coll">
              <h4>Follow Us</h4>
              <div className="social-links">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/fodrix "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC_KU3QN-5gdgXJBVHmOd7ig"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/fodrixx/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/fodrix"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/fodrixx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-coll" id="address_ft">
              <h4>Address</h4>
              <ul id="add_ul">
                <li>
                  <h5> Prayagraj </h5>
                  143 B/3 Meerapur, Prayagraj, <br /> Uttar Pradesh - 211003
                  <br />
                  Mob. No. - +91-7020147576
                </li>
                <li>
                  <h5> Nagpur</h5>
                  3, Gopal Nagar, Nagpur , <br />
                  Maharashtra - 440022
                  <br />
                  Mob. No. - +91-7020147576
                </li>
                <li>
                  <h5>Goa</h5>
                  422/5 Santa, Monica Enclave, Dhulapi Corlim Panjim,
                  <br /> Goa - 403110
                  <br />
                  Mob. No. - +91-7020147576
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
