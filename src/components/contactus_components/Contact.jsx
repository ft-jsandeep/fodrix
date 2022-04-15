import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="container col-lg-12 col-md-6 background_contact">
        <p className="contactuscomponents_text container-fluid">
          Hi there!! If you have any suggestions, queries or questions related
          to our service or even if you want to book a photoshoot, feel free to
          contact us by filling the contant form below!
        </p>
        <div className="form_contactus">
          <input type="text" placeholder="Your name" id="contactname" />
          <input type="email" placeholder="Your email " id="contactemail" />
          <input
            type="phone"
            placeholder="Your Phone number"
            id="contactphone"
          />

          <div className="msg_contactus">
            <textarea
              rows="6"
              cols="60"
              placeholder="Write your message here..."
            />
          </div>
        </div>
        <div className="button_contactuspage">
          <button type="submit">SEND MESSAGE</button>
        </div>
        <div className="social_address_contactus">
          <i className="fas fa-envelope"> support@fodrix.com</i>

          <i className="fa fa-phone-alt"> +91 702 014 7576</i>
        </div>
        <div className="social-media-contactuspage">
          <a href="https://www.facebook.com/fodrix " target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://youtu.be/gvWu9sw-iK4" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/fodrixx/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/fodrix" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/fodrixx" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};
export default Contact;
