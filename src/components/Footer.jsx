import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import bobcathead from '../assets/images/cruzBobcatHead-small.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to find out what we're up to!
        </p>
        <p className="footer-subscription text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/class">Our Team</Link>
            {/* <Link to="/sign-up">How it works</Link> */}
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            {/* <Link to="/">Investors</Link> */}
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            {/* <Link to="/">Destinations</Link> */}
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/lofi">Lofi Videos</Link>
            {/* <Link to="/">Submit Video</Link> */}
            {/* <Link to="/">Ambassadors</Link> */}
            {/* <Link to="/">Agency</Link> */}
            {/* <Link to="/">Influencer</Link> */}
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Youtube</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Facebook</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            {/* <Link to="/" className="social-logo">
              ILC <i className="fab fa-typo3"></i>
            </Link> */}
            <Link to="/" className="social-logo">
            <img src={bobcathead} alt="" /> ILC 
            </Link>
          </div>
          <small className="website-rights">N Cruz © 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            {/* <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
