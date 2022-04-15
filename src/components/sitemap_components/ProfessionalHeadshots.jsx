import React from "react";
import "./wedding.css";

import Footer from "../footer_components/Footer";
import Testinomials from "../testinomial_components/Testinomials";
import Typical from "react-typical";
import Images from "../../All_Images/Images";
import Faq from "../faqs_components/Faq";
import BookPhotographer from "../homePage_components/BookPhotographer";
import Photographyresults from "../homePage_components/Photographyresults";
import Packages from "../packages_components/Packages";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 100,
  duration: 1000,
});
const ProfessionalHeadshots = () => {
  return (
    <>
      <div className="Top-band">
        <header className="band-top-header">
          <h1>
            We prioritise your safety, thats why we make strict contactless
            photoshoots available just for you!
          </h1>
        </header>
      </div>
      <div className="row">
        <div className="col-lg-7 col-xl-6 container min-vh-lg-90  align-items-center  p-sm-4  text_sitemap">
          <h1 className="sitemap_component_text">
            {" "}
            Fascinating Wedding Shoots made fascinatingly effortless!!!
          </h1>
          <p className="content_sitemap">
            Book an exceptionally professional wedding photographer to capture
            all your exclusive moments for your special day with affordable
            prices starting from....
          </p>
          <div className="btn_sitemap_component">
            <a className="btn_sitemap_link" href="#">
              <p className="text_sitemap_component_txt">
                <span className="bg"></span>
                <span className="base"></span>
                <span className="text">Get Started</span>
              </p>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-xl-6  d-lg-flex flex-lg-column photos_sitemap">
          <img
            loading="lazy"
            className="img-responsive img-fluid Photos_sitemap "
            src={Images.Engagement}
            alt="not found"
          />
        </div>
      </div>
      <div className="text_extra_content">
        Brilliant Photographers for your remarkable memories
      </div>
      <div className="card_sitemap_div">
        <ul className="card-wrapper">
          <li className="card ">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1601162275327-4b4ae1c4b3ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=" not Found"
            />
          </li>
          <li className="card">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1583878544470-6279e18a3947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt=" not Found"
            />
          </li>
          <li className="card">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1626375362529-ab540f0dc801?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=302&q=80"
              alt=" not Found"
            />
          </li>
          <li className="card ">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1595367676813-a639cd1abb95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=" not Found"
            />
          </li>
          <li className="card">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1541251205067-185caea66bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
              alt=" not Found"
            />
          </li>
          <li className="card">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1611105672452-1db1501c528e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=" not Found"
            />
          </li>
        </ul>
      </div>
      <div className="Bookphotographer_wedding">
        <BookPhotographer />
      </div>
      <Testinomials />
      <Photographyresults />
      <div className="typewriter_wedding_main">
        <p className="typewriter_heading_wedding">Get stunning photos</p>
        <div className="typewriter_Wedding">
          <p>
            For Your {""}
            <Typical
              className="type_sitemap"
              loop={Infinity}
              wrapper="b"
              steps={[
                "Kids",
                1200,
                "Business",
                1200,
                "Travelling",
                1200,
                "Wedding",
                1200,
              ]}
            />
          </p>
        </div>

        <button class="custom-btn btn-sitemap-2">
          <span>Get Started</span>
        </button>

        <button class="custom-btn btn-sitemap-1">
          <span>Enquire Us</span>
        </button>
      </div>
      <Packages />
      <Faq />
    </>
  );
};
export default ProfessionalHeadshots;
