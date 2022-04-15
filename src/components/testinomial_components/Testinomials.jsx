import React, { useEffect } from "react";
import Images from "../../All_Images/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./testinomial.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
export default function Testinomials() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Testimonials | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Fodrix testimonials - check out how much our customers loved their experience with the fodrixographer."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/testimonial");
  }, []);
  return (
    <>
      <h1 className="heading_testimonial_components m-2 text-center font-weight-bold">
        {" "}
        Hear from customers like you
      </h1>
      <Swiper
        navigation={true}
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "#21abcd" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>Mohit is an incredible photographer!</b>

                <p style={{ fontSize: "14px" }}>
                  He has a great eye for capturing naturally beautiful photos.
                  Mohit is very professional, listens to your needs and goes
                  above and beyond to meet them! Book him ASAP!
                </p>
              </Card.Text>
            </Card.Body>

            <div className="mt-1">
              <div className="col-3">
                {/* <img
                  className="img-fluid"
                  src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                  width="60px"
                  height="80px"
                  alt=" not Found"
                /> */}
                <img
                  loading="eager"
                  src={Images.mehul}
                  alt="Mehul-rastogi"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>

              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Mehul Rastogi
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Travel photoshoot
                </p>
              </div>
            </div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>Amazing experience through and through!</b>

                <p style={{ fontSize: "14px" }}>
                  The support team as extremely helpful and able to accomodate
                  our last minute request for a very important shoot.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
                {/* <img
                  className="img-fluid"
                  src="https://cdn4.iconfinder.com/data/icons/people-avatar-flat-1/64/girl_long_user_people_woman_lady_avatar-512.png"
                  width="60px"
                  height="80px"
                  alt=" not Found"
                /> */}
                <img
                  loading="eager"
                  src={Images.ojaswi}
                  alt="ojaswi"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>
              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Ojaswi Gaikwad
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Business photoshoot
                </p>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>
                  The team was very efficient and flexible, and the
                  photographers were very professional.
                </b>

                <p style={{ fontSize: "14px" }}>
                  Booked a baby shoot with fodrix and the photos turned out
                  amazing! They clicked very cute and adorable photos of the
                  baby.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
                {/* <img
                  className="img-fluid"
                  src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                  width="60px"
                  height="80px"
                  alt=" not Found"
                /> */}
                <img
                  loading="eager"
                  src={Images.zeeshan}
                  alt="Zeeshan"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>
              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Zeeshan
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Baby Photoshoot
                </p>
              </div>
            </div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>Our photographer were amazing!</b>

                <p style={{ fontSize: "14px" }}>
                  Very responsive, he arrived early and was extremely
                  professional yet also very friendly. Overall the whole process
                  was so simple and easy, the end result was lovely.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
                {/* <img
                  className="img-fluid"
                  src="https://cdn4.iconfinder.com/data/icons/people-avatar-flat-1/64/girl_long_user_people_woman_lady_avatar-512.png"
                  width="60px"
                  height="80px"
                  alt=" not Found"
                /> */}
                <img
                  loading="eager"
                  src={Images.jyoti}
                  alt="Jyoti-singh"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>

              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Jyoti Khanna
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Wedding & Engagement Photoshoot
                </p>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>The Photographer was brilliant and the photos are lovely.</b>

                <p style={{ fontSize: "14px" }}>
                  Fantastic service. I was matched with a photographer very
                  quickly.Shubham Jadhav on numerous occasions and have been
                  happier with his images, than any other photographer.He has an
                  eye for finding you at your best.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
                {/* <img
                  className="img-fluid"
                  width="60px"
                  height="80px"
                  alt=" not Found"
                /> */}
                <img
                  loading="eager"
                  src={Images.rishabh}
                  alt="rishabh"
                  width="90px"
                  height="50px"
                />
              </div>

              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Rishav Singh
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Party Photoshoot
                </p>
              </div>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ backgroundColor: "#f8f8ff" }}>
            <span className="m-3" style={{ color: "skyblue" }}>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </span>

            <Card.Body>
              <Card.Text>
                <b>
                  Amazing photographer made our house and garden look like a pro
                  studio!
                </b>

                <p style={{ fontSize: "14px" }}>
                  Booked a baby shoot only two days in advance, and photos ready
                  in a private online gallery only two days after the session.
                </p>
              </Card.Text>
            </Card.Body>

            <div className=" mt-1">
              <div className="col-3">
                {/* <img
                  className="img-fluid"
                  src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                  width="60px"
                  height="80px"
                  alt=" not Found"
                /> */}
                <img
                  loading="eager"
                  src={Images.harpreet}
                  alt="Harpreet-kaur"
                  border="0"
                  width="90px"
                  height="50px"
                />
              </div>

              <div className="col-12">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Harpeet Kaur Singh
                </span>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Baby Photoshoot
                </p>
              </div>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
