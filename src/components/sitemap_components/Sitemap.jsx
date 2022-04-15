import React from "react";
import "./Sitemap.css";

import Footer from "../footer_components/Footer";
import Images from "../../All_Images/Images";
export default function Sitemap() {
  return (
    <>
      <div class="container">
        <h1>Sitemap</h1>

        <div class="row">
          <div class="col-md-8 col-sm-6">
            <section className="section_sitemap_css" id="sec1">
              <h2>Personal</h2>
              <div class="row">
                <div class="col-md-5">
                  <ul>
                    <li>
                      <a href="/wedding">
                        <p>Wedding Photography</p>
                      </a>
                    </li>
                    <li>
                      <a href="/engagement">
                        <p>Engagement Photoshoot</p>
                      </a>
                    </li>
                    <li>
                      <a href="/couple">
                        <p>Couple Photoshoot</p>
                      </a>
                    </li>
                    <li>
                      <a href="/Family">
                        <p>Family Photoshoot</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-5">
                  <ul>
                    <li>
                      <a href="/PersonalPotrait">
                        <p>Personal Portraits</p>
                      </a>
                    </li>
                    <li>
                      <a href="/Graduation">
                        <p>Graduation</p>
                      </a>
                    </li>
                    <li>
                      <a href="/TravelPhotoshoot">
                        <p>Travel Photoshoot</p>
                      </a>
                    </li>
                    <li>
                      <a href="/Babynewborn">
                        <p>Baby & Newborn</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-5 ">
                  <ul>
                    <li>
                      <a href="/Maternity">
                        <p>Maternity</p>
                      </a>
                    </li>
                    <li>
                      <a href="/Kids_Party">
                        <p>Kids Party</p>
                      </a>
                    </li>
                    <li>
                      <a href="/Parties_Gathering">
                        <p>Parties & Gathering</p>
                      </a>
                    </li>
                    <li>
                      <a href="/PetPhotography">
                        <p>Pet Photography</p>
                      </a>
                    </li>
                    <li>
                      <a href="/Photobooks">
                        <p>Photobooks</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="section_sitemap_css" id="sec2">
              <h2>Business</h2>
              <div class="row">
                <div class="col-md-5">
                  <ul>
                    <li>
                      <a href="/VolumePricing">
                        <p>Volume Pricing</p>
                      </a>
                    </li>
                    <li>
                      <a href="/BusinessEvents">
                        <p>Business Events</p>
                      </a>
                    </li>
                    <li>
                      <a href="/ProfessionalHeadshots">
                        <p>Professionals Headshots</p>
                      </a>
                    </li>
                    <li>
                      <a href="/Corporateandteams">
                        <p>Corporate & Teams</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-5">
                  <ul>
                    <li>
                      <a href="/PropertyPhotography">
                        <p>Property Photography</p>
                      </a>
                    </li>
                    <li>
                      <a href="/FoodPhotography">
                        <p>Food Photography</p>
                      </a>
                    </li>
                    <li>
                      <a href="/ProductPhotography">
                        <p>Product Photography</p>
                      </a>
                    </li>
                    <li>
                      <a href="/LifestylePhotography">
                        <p>Lifestyle Photography</p>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-5">
                  <ul></ul>
                </div>
              </div>
            </section>
            <section className="section_sitemap_css" id="sec3">
              <h2>Discover</h2>
              <div class="row">
                <div class="col-md-5">
                  <ul>
                    <li>
                      <a href="#">How it works</a>
                    </li>
                    <li>
                      <a href="#">Customer stories</a>
                    </li>
                    <li>
                      <a href="#">Gift a photoshoot</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <ul>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div class="col-md-4 col-sm-6">
            <section className="section_sitemap_css">
              <img
                className="img-fluid"
                src={Images.sitemapmap}
                alt="not found"
              />
            </section>
            <p className="image_content_sitemap_css slant">
              {" "}
              Let us capture your beautiful moments for you...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
