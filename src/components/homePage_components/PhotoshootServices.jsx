import React, { useEffect } from "react";
import "./photoshoot.css";
import Images from "../../All_Images/Images";
import CallbackPopup from "../../mainUtils/CallbackPopup";

export default function BecomeFodrixographer() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Best Travel, Prewedding Photographers in India | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Hire a Best Professional Travel photographer in India with Fodrix. Capture Pre wedding, maternity, wedding, family, engagement, or proposal."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute(
      "href",
      "https://www.fodrix.com/photoshoot_services"
    );
  }, []);
  return (
    <>
      <div className="photoshoot_home">
        <h1
          className="heading_photoshootservices text-center"
          style={{ marginTop: "150px" }}
        >
          Photoshoot Services
        </h1>

        <div className="grid">
          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.travel} alt=" not Found" />
            <div className="img-description ">
              <h3>Travel Shoot</h3>
              <p>
                We've simplified the process of finding you the right travel
                photographer. You can put down your camera and can connect with
                the surroundings.
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.Wedding} alt=" not Found" />
            <div className="img-description">
              <h3>Wedding Shoots</h3>
              <p>
                Professional wedding photography can make capturing your
                life-changing moments hassle-free. Make your wedding a picture
                perfect day.
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.business} alt=" not Found" />
            <div className="img-description">
              <h3>Business Shoot </h3>
              <p>
                Business shoots are one of the most important assets of any
                organisation/company. Create authentic images of your business
                with us.
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.prewedding} alt=" not Found" />
            <div className="img-description">
              <h3>Pre-Wedding Shoot </h3>
              <p>
                Let them see that you’re in love and ready to get married
                through beautiful pictures. Won’t it also make you comfortable
                in front of cameras before your big day?
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.baby} alt=" not Found" />
            <div className="img-description">
              <h3>Baby shoot </h3>
              <p>
                Capture your baby's most precious moments. Whether they are
                newborns or toddlers, we are here to make it easier for you to
                capture their cute moments.
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.maternity} alt=" not Found" />
            <div className="img-description">
              <h3> Maternity shoot</h3>
              <p>
                Let everyone know that someone is about to arrive in this world.
                Capture the joyous event of parent-hood with us. Book maternity
                photoshoots hassle-free.
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.Family} alt=" not Found" />
            <div className="img-description">
              <h3>Family Shoot</h3>
              <p>
                Create awesome memories with your family. Let our expert
                photographers provide your beautiful family with a professional
                yet enjoyable family photoshoot.
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img
              loading="lazy"
              src={Images.PersonalPortrait}
              alt=" not Found"
            />
            <div className="img-description">
              <h3>Personal Portrait shoot </h3>
              <p>
                Look more professional with a personal portrait photoshoot. Let
                us help you know all of your finest angles and enhance your
                portfolio with Fodrix.
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.otherServce} alt=" not Found" />
            <div className="img-description">
              <h3>Others </h3>
              <p>
                Are you interested in capturing amazing memories? With our
                incredibly talented photographers, you'll be able to capture all
                of the memorable moments.
              </p>
              <div className="read_more">
                <a href="photoshoot_services" target="blank">
                  <button className="btn btn-primary" id="readmore_button">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallbackPopup popup={true} callBackForm={true} />
    </>
  );
}
