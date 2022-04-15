import React from "react";
import "./blog.css";

export default function Blogs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <a
                className="navbar-brand animated fadeInLeft"
                href="#"
                style={{
                  animationDelay: ".50s",
                  fontFamily: "cursive",
                  color: "steelblue",
                  fontSize: "60px",
                  fontWeight: "400px",
                  textShadow: "4px 3px 3px skyblue",
                }}
              >
                Fodrix
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li
                    className="nav-item animated fadeInDown"
                    style={{ animationDelay: ".25s" }}
                  >
                    <a className="nav-link" href="#">
                      Company <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li
                    className="nav-item animated fadeInDown ml-5"
                    style={{ animationDelay: ".50s" }}
                  >
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li
                    className="nav-item animated fadeInDown ml-5"
                    style={{ animationDelay: ".75s" }}
                  >
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li
                    className="nav-item animated fadeInDown ml-5"
                    style={{ animationDelay: "1s" }}
                  >
                    <a className="nav-link" href="#">
                      Services
                    </a>
                  </li>
                  <li
                    className="nav-item animated fadeInDown ml-5"
                    style={{ animationDelay: "1.25" }}
                  >
                    <a className="nav-link" href="#">
                      Careers
                    </a>
                  </li>
                  <li
                    className="nav-item animated fadeInDown ml-5"
                    style={{ animationDelay: "1.50" }}
                  >
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img
              className="animated fadeInRight"
              style={{
                boxShadow: "4px 3px 5px skyblue, -4px -3px 5px skyblue",
              }}
              src="https://st2.depositphotos.com/1420973/6409/i/600/depositphotos_64095317-stock-photo-blog-concept-cloud-chart-print.jpg"
              width="100%"
              height="350px"
            />
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row mt-5">
          <div className="col-6 text-center">
            <h3
              className="animated fadeInLeft"
              style={{
                textShadow: "4px 3px 5px grey",
                animationDelay: ".25s",
                fontFamily:
                  '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
                fontSize: "60px",
                fontWeight: "250px",
              }}
            >
              Our Blogs
            </h3>
            <p
              className="animated fadeInRight"
              style={{ fontFamily: "cursive", animationDelay: ".50s" }}
            >
              Blogging isn't about publishing as much as you can. It's about
              publishing as smart as you can.
            </p>
          </div>
          <div className="col-6 text-center">
            <div
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                fontSize: "60px",
                fontWeight: "150px",
                color: "steelblue",
                textShadow: "4px 3px 5px skyblue, 3px 3px 5px limegreen",
              }}
            >
              <span
                className="animated fadeInDown"
                style={{ animationDelay: ".25s" }}
              >
                B
              </span>
              <span
                className="animated fadeInUp"
                style={{ animationDelay: ".50s" }}
              >
                L
              </span>
              <span
                className="animated fadeInDown"
                style={{ animationDelay: ".75s" }}
              >
                O
              </span>
              <span
                className="animated fadeInUp"
                style={{ animationDelay: "1s" }}
              >
                G
              </span>
              <span
                className="animated fadeInDown"
                style={{ animationDelay: "1.25s" }}
              >
                G
              </span>
              <span
                className="animated fadeInUp"
                style={{ animationDelay: "1.50s" }}
              >
                I
              </span>
              <span
                className="animated fadeInDown"
                style={{ animationDelay: "1.75s" }}
              >
                N
              </span>
              <span
                className="animated fadeInUp"
                style={{ animationDelay: "2s" }}
              >
                G
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <h1
              style={{
                fontFamily:
                  'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                fontSize: "60px",
              }}
            >
              Featured Posts
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card card_blog" style={{ width: "18rem" }}>
              <img
                loading="lazy"
                className="card-img-top"
                style={{ padding: "2%" }}
                src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row mt-3">
                    <div className="col-12 text-right text-muted">
                      <span className="fa fa-eye"> 1,254</span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <h3>Blog Heading</h3>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <span
                        style={{ color: "steelblue", cursor: "pointer" }}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        {" "}
                        Read More <span className="fa fa-share"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card card_blog" style={{ width: "18rem" }}>
              <img
                loading="lazy"
                className="card-img-top"
                style={{ padding: "2%" }}
                src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row mt-3">
                    <div className="col-12 text-right text-muted">
                      <span className="fa fa-eye"> 1,254</span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <h3>Blog Heading</h3>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <span
                        style={{ color: "steelblue", cursor: "pointer" }}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        {" "}
                        Read More <span className="fa fa-share"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <div className="card card_blog" style={{ width: "18rem" }}>
              <img
                loading="lazy"
                className="card-img-top"
                style={{ padding: "2%" }}
                src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row mt-3">
                    <div className="col-12 text-right text-muted">
                      <span className="fa fa-eye"> 1,254</span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <h3>Blog Heading</h3>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-12">
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <span
                        style={{ color: "steelblue", cursor: "pointer" }}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        {" "}
                        Read More <span className="fa fa-share"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 ml-5 animated fadeInLeft">
          <div className="col-12">
            <div className="card card_blog">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">
                    <img
                      loading="lazy"
                      className="mt-3"
                      style={{ padding: "2%" }}
                      src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                      width="350px"
                      height="290px"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="col-8 mt-5">
                    <div className="container-fluid border">
                      <div className="row mt-3">
                        <div className="col-12 text-muted text-right">
                          <span className="fa fa-eye"> 1,254</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h3 style={{ padding: "2%" }}>Blog Heading</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12" style={{ height: "120px" }}>
                          <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <span
                            style={{
                              color: "steelblue",
                              cursor: "pointer",
                              padding: "2%",
                            }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            {" "}
                            Read More <span className="fa fa-share"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ml-5 animated fadeInRight">
          <div className="col-12">
            <div className="card card_blog">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">
                    <img
                      loading="lazy"
                      className="mt-3"
                      style={{ padding: "2%" }}
                      src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                      width="350px"
                      height="290px"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="col-8 mt-5">
                    <div className="container-fluid border">
                      <div className="row mt-3">
                        <div className="col-12 text-muted text-right">
                          <span className="fa fa-eye"> 1,254</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h3 style={{ padding: "2%" }}>Blog Heading</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12" style={{ height: "120px" }}>
                          <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <span
                            style={{
                              color: "steelblue",
                              cursor: "pointer",
                              padding: "2%",
                            }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            {" "}
                            Read More <span className="fa fa-share"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ml-5 animated fadeInLeft">
          <div className="col-12">
            <div className="card card_blog">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">
                    <img
                      loading="lazy"
                      className="mt-3"
                      style={{ padding: "2%" }}
                      src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                      width="350px"
                      height="290px"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="col-8 mt-5">
                    <div className="container-fluid border">
                      <div className="row mt-3">
                        <div className="col-12 text-muted text-right">
                          <span className="fa fa-eye"> 1,254</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h3 style={{ padding: "2%" }}>Blog Heading</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12" style={{ height: "120px" }}>
                          <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <span
                            style={{
                              color: "steelblue",
                              cursor: "pointer",
                              padding: "2%",
                            }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            {" "}
                            Read More <span className="fa fa-share"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ml-5 animated fadeInRight">
          <div className="col-12">
            <div className="card card_blog">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">
                    <img
                      loading="lazy"
                      className="mt-3"
                      style={{ padding: "2%" }}
                      src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                      width="350px"
                      height="290px"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="col-8 mt-5">
                    <div className="container-fluid border">
                      <div className="row mt-3">
                        <div className="col-12 text-muted text-right">
                          <span className="fa fa-eye"> 1,254</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h3 style={{ padding: "2%" }}>Blog Heading</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12" style={{ height: "120px" }}>
                          <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <span
                            style={{
                              color: "steelblue",
                              cursor: "pointer",
                              padding: "2%",
                            }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            {" "}
                            Read More <span className="fa fa-share"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ml-5 animated fadeInLeft">
          <div className="col-12">
            <div className="card card_blog">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">
                    <img
                      loading="lazy"
                      className="mt-3"
                      style={{ padding: "2%" }}
                      src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                      width="350px"
                      height="290px"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="col-8 mt-5">
                    <div className="container-fluid border">
                      <div className="row mt-3">
                        <div className="col-12 text-muted text-right">
                          <span className="fa fa-eye"> 1,254</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h3 style={{ padding: "2%" }}>Blog Heading</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12" style={{ height: "120px" }}>
                          <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <span
                            style={{
                              color: "steelblue",
                              cursor: "pointer",
                              padding: "2%",
                            }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            {" "}
                            Read More <span className="fa fa-share"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 ml-5 animated fadeInRight">
          <div className="col-12">
            <div className="card card_blog">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">
                    <img
                      loading="lazy"
                      className="mt-3"
                      style={{ padding: "2%" }}
                      src="https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
                      width="350px"
                      height="290px"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="col-8 mt-5">
                    <div className="container-fluid border">
                      <div className="row mt-3">
                        <div className="col-12 text-muted text-right">
                          <span className="fa fa-eye"> 1,254</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h3 style={{ padding: "2%" }}>Blog Heading</h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12" style={{ height: "120px" }}>
                          <p>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <span
                            style={{
                              color: "steelblue",
                              cursor: "pointer",
                              padding: "2%",
                            }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                          >
                            {" "}
                            Read More <span className="fa fa-share"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="container-fluid mt-5 bg-dark">
        <div className="row">
          <div
            className="col-12 text-white text-center"
            style={{
              fontFamily:
                '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
              backgroundColor: "cadetblue",
              clipPath:
                "polygon(0 0, 49% 0, 100% 0, 100% 78%, 56% 79%, 52% 100%, 49% 78%, 0 77%)",
            }}
          >
            <h4
              style={{ padding: "1%", fontFamily: "cursive", fontSize: "16px" }}
            >
              Need help? Call our support team 24/7 at 9584xxxxxxx
            </h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-6 text-white">
                  <h2
                    style={{
                      fontSize: "110px",
                      fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    }}
                  >
                    FODRIX
                  </h2>
                </div>
                <div className="col-6 mt-4 text-white text-center">
                  <h6 style={{ fontFamily: "cursive" }}>
                    For us,{" "}
                    <b>
                      <i>photography</i>
                    </b>{" "}
                    is not lookig, it's feeling. If you can?t feel what you?re
                    looking at, then you?re never going to get others to feel
                    anything when they look at your pictures.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-2 text-white">
            <h5>Products</h5>
            <div className="text-muted" style={{ cursor: "pointer" }}>
              <p>Pricing</p>
              <p>Team</p>
              <p>Education</p>
              <p>Refer a friend</p>
              <p>Updates</p>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2 text-white">
            <h5>Features</h5>
            <div className="text-muted" style={{ cursor: "pointer" }}>
              <p>Overview</p>
              <p>Design</p>
              <p>Portfolio</p>
              <p>Collaborators</p>
              <p>Sletch Plugin</p>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2 text-white">
            <h5>Get Started</h5>
            <div className="text-muted" style={{ cursor: "pointer" }}>
              <p>FAQ</p>
              <p>Resources</p>
              <p>Guides</p>
              <p>Examples</p>
              <p>Book</p>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2 text-white">
            <h5>About</h5>
            <div className="text-muted" style={{ cursor: "pointer" }}>
              <p>Stories</p>
              <p>Community</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Brand Assests</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-3 text-white">
            <h5>Contact Us</h5>
            <span className="fa fa-phone mt-3"></span>
            <span className="text-muted ml-3">9856xxxxx</span>
            <br />
            <span className="fa fa-envelope-o mt-3"></span>
            <span className="text-muted ml-3">abc123@gmail.com</span>
          </div>
          <div className="col-3 text-right mt-4 ">
            <p
              style={{
                fontFamily: "cursive",
                fontSize: "25px",
                color: "white",
              }}
            >
              Subscribe for special offers
            </p>
          </div>
          <div className="col-5 mt-4">
            <form className="form-inline ml-5 ">
              <input
                className="form-control  my-sm-0 "
                style={{ width: "280px", borderRadius: "150px 0px 0px 150px" }}
                type="search"
                placeholder="Email Address"
                aria-label="Search"
              />
              <button
                className="btn  my-2 my-sm-0 text-white"
                type="submit"
                style={{
                  backgroundColor: "greenyellow",
                  borderRadius: "0px 50px 50px 0px",
                }}
              >
                <span className="fa fa-send"></span>
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div lass="col-1 ml-4"></div>
          <div className="col-11 ml-5">
            <hr style={{ backgroundColor: "white", height: "2px" }} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <span
              className="fa fa-facebook-official fa-2x"
              style={{ color: "blue", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Facebook"
            ></span>
            <span
              className="fa fa-whatsapp fa-2x ml-4"
              style={{ color: "lightgreen", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Whatsapp"
            ></span>
            <span
              className="fa fa-twitter fa-2x ml-4"
              style={{ color: "darkturquoise", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Twitter"
            ></span>
            <span
              className="fa fa-telegram fa-2x ml-4"
              style={{ color: "lightskyblue", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Telegram"
            ></span>
            <span
              className="fa fa-snapchat fa-2x ml-4"
              style={{ color: "yellow", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Snapchat"
            ></span>
            <span
              className="fa fa-linkedin fa-2x ml-4"
              style={{ color: "steelblue", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Linkedin"
            ></span>
            <span
              className="fa fa-google-plus-official fa-2x ml-4"
              style={{ color: "orangered", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="G-mail"
            ></span>
            <span
              className="fa fa-youtube-play fa-2x ml-4"
              style={{ color: "red", cursor: "pointer" }}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Youtube"
            ></span>
          </div>
        </div>
      </div>
    </>
  );
}
