import React, { useEffect, useRef, useState } from "react";
import CallbackAlert from "../../mainUtils/CallbackAlert";
import "./Contact.css";
import { Helmet } from "react-helmet";

export default function ContactUs() {
  const clearNameValue = useRef();
  const clearEmailValue = useRef();
  const clearCommentsValue = useRef();
  const url = "https://api.fodrix.com/addConnect";

  const [alertDisplay, setAlertDisplay] = useState(false);

  const callbackSubmitHandler = (e) => {
    e.preventDefault();
    try {
      const data = new FormData(
        document.getElementById("connectWithFodrixForm")
      );
      const formApiData = {};
      // Loop to iterate over the input value
      for (const [key, value] of data) {
        formApiData[`${key}`] = value;
        // console.log(key, value);
      }
      fetch(url, {
        method: "POST",
        body: JSON.stringify(formApiData),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setAlertDisplay(true);
          clearNameValue.current.value = "";
          clearEmailValue.current.value = "";
          clearCommentsValue.current.value = "";
          setTimeout(() => {
            setAlertDisplay(false);
          }, 6000);
        })
        .catch((e) => {
          throw new Error(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Contact us | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Help us in contacting you for the best photography experience for your travel, wedding, pre-wedding, and all type of events in all over India."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/contact");
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Contact us | Fodrix</title>
        <meta
          name="description"
          content="Help us in contacting you for the best photography experience for your travel, wedding, pre-wedding, and all type of events in all over India."
        />
      </Helmet> */}
      {alertDisplay && <CallbackAlert />}
      <div className="main_container_ctus">
        <div className="container_ctus">
          <div className="content_ctus">
            <div className="left-side_ctus">
              <div className="address details_ctus">
                <i className="fas fa-handshake" />
                <div className="topic">
                  <h4>Social Media</h4>
                  <div className="social_ctus">
                    <a href="#">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="phone details_ctus">
                <i className="fas fa-phone-alt" />
                <div className="topic">Phone</div>
                <div className="text-one">+91-7020147576</div>
              </div>
              <div className="email details_ctus">
                <i className="fas fa-envelope" />
                <div className="topic">Email</div>
                <div className="text-one">support@fodrix.com</div>
              </div>
            </div>
            <div className="right-side_ctus">
              <h1 className="topic-text">Connect with Fodrix</h1>
              <p className="topic_para">
                If you have any question, suggestion or you just want to book a
                photo session then feel freeto get in touch with us.
              </p>
              <form id="connectWithFodrixForm" onSubmit={callbackSubmitHandler}>
                <div className="input-box_ctus">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    ref={clearNameValue}
                    required
                  />
                </div>
                <div className="input-box_ctus">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    ref={clearEmailValue}
                    required
                  />
                </div>
                <div className="input-box_ctus message-box">
                  <textarea
                    name="message"
                    id="msg"
                    cols={30}
                    rows={10}
                    placeholder="Please enter your message..."
                    defaultValue={""}
                    ref={clearCommentsValue}
                    required
                  />
                </div>
                <div className="button_ctus">
                  <button type="submit">Send Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
