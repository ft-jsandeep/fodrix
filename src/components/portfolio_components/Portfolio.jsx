import React, { useEffect } from "react";
import Images from "../../All_Images/Images";
import Searchbox from "../Searchbox_component/Searchbox";
import "../HowItWorks_components/how.css";
import "./portfolio.css";
import Whatsapp from "../Whatsapp";
import CallbackPopup from "../../mainUtils/CallbackPopup";
import { Helmet } from "react-helmet";
export default function Portfolio() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Amazing photoshoot portfolio by Fodrixographer | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Fodrix helps you to get an amazing photoshoot experience for Travel, wedding, Pre-wedding and all types of events at an affordable price anywhere in India."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/portfolio");
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Amazing photoshoot portfolio by Fodrixographer | Fodrix</title>
        <meta
          name="description"
          content="Fodrix helps you to get an amazing photoshoot experience for Travel, wedding, Pre-wedding and all types of events at an affordable price anywhere in India."
        />
      </Helmet> */}
      <Whatsapp />
      <h1 id="portfolio-header">Portfolio</h1>
      <div className="div2subhead_portfolio">
        <p>
          Fodrix appreciates every aspect of our clients' lives, and we are
          grateful that they have chosen to entrust us with capturing their
          memories. We offer a variety of photoshoots to help our clients
          remember their special moments. Birthday parties, pre-weddings,
          weddings, baby showers, maternity, office parties, and other business
          events are all covered by our hand-picked photographers.
        </p>
        <p>
          Our incredibly gifted photographers also join our clients on their
          travels across the country, capturing their memorable moments while
          they relax and enjoy themselves. If you are looking for someone to
          capture your most memorable moments in beautiful photographs, our
          exceptionally skilled photographers are looking forward to working
          with you.
        </p>
      </div>
      <div class="main_container_pf">
        <div class="container_pf">
          <div class="img_pf img_pf1">
            <img loading="lazy" src={Images.new_5} alt=" not Found" />
          </div>
          <div class="img_pf img_pf2">
            <img loading="lazy" src={Images.new_2} alt=" not Found" />
          </div>
        </div>

        <div class="container_pf">
          <div class="img_pf img_pf3">
            <img loading="lazy" src={Images.new_3} alt=" not Found" />
          </div>
          <div class="img_pf img_pf4">
            <img src={Images.new_4} alt=" not Found" />
          </div>
        </div>

        <div class="container_pf">
          <div class="img_pf img_pf5">
            <img loading="lazy" src={Images.new_1} alt=" not Found" />
          </div>
          <div class="img_pf img_pf6">
            <img loading="lazy" src={Images.new_6} alt=" not Found" />
          </div>
        </div>

        <div class="container_pf">
          <div class="img_pf img_pf7">
            <img loading="lazy" src={Images.new_7} alt=" not Found" />
          </div>
          <div class="img_pf img_pf8">
            <img loading="lazy" src={Images.new_8} alt=" not Found" />
          </div>
        </div>

        <div class="container_pf">
          <div class="img_pf img_pf9">
            <img loading="lazy" src={Images.new_9} alt=" not Found" />
          </div>
          <div class="img_pf img_pf10">
            <img loading="lazy" src={Images.new_10} alt=" not Found" />
          </div>
        </div>
      </div>

      {/* <Searchbox /> */}
      <CallbackPopup popup={true} callBackForm={true} />
      <div className="search_heading">
        <h3>Get an awesome photoshoot experience!</h3>
      </div>
      <div className="search_how">
        <Searchbox />
      </div>
    </>
  );
}
