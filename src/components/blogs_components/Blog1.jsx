import {useEffect, useState} from "react";
import React from "react";

import "./Blog_read.css";
import Images from "../../All_Images/Images";

 

const Blog1 = () => {
  
let apiKey = process.env.REACT_APP_CITY_HOME;
 
 
const imageurl = apiKey + "/user/getallBlogs";

const city = localStorage.getItem("city");
const [Citydetails, setCitydetails] = useState([]);
  
const getCityname = async () => {
   
  const response = await fetch(apiKey + "getCityDetails/" + city);
  console.log(response);
  if(response.status===200){
    const data = await response.json();
    console.log(data);
    
    setCitydetails(data);
     
   console.log(data);
  }else {
    alert("please enter a valid city");
     
  }
  
};
useEffect(() => {
  getCityname();
}, []);

  return (
    <>
      <div class="logo_fodrix"><img src={Images.fodrixiconnew} alt="fodrix"/></div>

      <div class="blog_heading">
        <h1>FAQs on Manali</h1>
      </div>

      <div class="blog_box">
        <div class="blog_container">
          <div class="blog_img"><img src={imageurl+Citydetails.id}  alt="manali"/></div>
          <div class="blog_content">
            <p> {Citydetails.about}
              {/* Amidst the mountain slopes is Manali, enchanting sights for hill
              lovers, enchanting streams, fairy tale-like little cottages amidst
              the fog, and a sparkling scent of pine and freshness. Oh, and you
              can ride a yak or ride your bike to the famous Rohtang Pass to
              Leh, the Valley of the Gods. Manali suits the needs of every kind
              of travel mindset. A family in search of some bonding time, a
              couple for some peace and quiet, a solo traveler for some solitude
              or a group of friends for an adventure. */}
            </p>
            {/* <h2> <i style="font-size: xx-large;">Q1 - </i> What is the Weather in Manali?</h2> */}
            <li>Average annual temperature: 4 ° C -26 ° C</li>
            <li>Summer temperature - 10 ° C - 26 ° C</li>
            <li>Winter temperature –15 ° C to 12 ° C</li>
            {/* <h2> <i style="font-size: xx-large;">Q2 - </i> What is to pack?</h2> */}
            <p> {Citydetails.about}
              {/* During summer and spring months - Summer clothing + essential and
              evening light jacket or windsheet During winter - heavy wool,
              warmer Plus trekking boots, sunscreen, a poncho, comfortable
              walking shoes and a camera to cherish memories. There are a lot of
              things in and around Manali. Here is your ULTIMATE travel guide to
              the hippie town of Manali Himachal. */}
            </p>
          </div>
        </div>
      </div>

      <div class="blog_box">
        <div class="blog_container">
          <div class="blog_img"><img src={imageurl+Citydetails.id} alt="manali2"/></div>
          <div class="blog_content">
            <h2>
              <i style={{ fontSize: "xx-large" }}>Q3 - </i> Why is Kullu Valley
              famous?
            </h2>
            <p>
              The divine beauty of Kullu, known as The Valley of Gods, is being
              liked by travelers from all over the world. Adventurists are
              exploring its forbidden slopes and romantic people are idealizing
              its tranquil landscape. For almost all reasons or no reason at
              all, Kullu has never developed any true ice-loving map. Amazing
              things in Kullu-Manali - Kullu Valley Here is the list of the most
              sought after things in Kullu-Manali.
            </p>
            <p>
              <strong style={{ fontSize: "xx-large" }}>1.</strong> Visit Hot
              Springs in Manikaran: Just 1.5 hours from Kullu, Manikaran's most
              famous hot springs are a sight to the eye. Any experience of
              Kullu-Manali tourism is incomplete without traveling. Attractions:
              Visit Manikaran Gurudwara, Naina Bhagwati Temple, Kheerganga and
              Parvati Valley. Activities: Trekking, shopping, rafting, and going
              on food trails.
            </p>
            <p>
              <strong style={{ fontSize: "xx-large" }}>2.</strong> Spot some
              fauna in the Great Himalayan National Park: With 31 species of
              animals and 181 unnatural species of birds present in the
              Himalayas, wildlife lovers among you will not be disappointed. Of
              all the attractions in the valley, this is one of the more
              aggressive things to do in Kullu Manali. Nearby attractions: Visit
              the Tirthan valley, enjoy wildlife attractions (snow leopards,
              blue sheep, Himalayan brown bears, Himalayan Thar). Activities:
              trekking, camping, bird watching, trout fishing
            </p>
            <p>
              <strong style={{ fontSize: "xx-large" }}>3.</strong> Trek to
              Kheerganga: Located in the Parvati valley, it is easily one of the
              most picturesque treks among the great mountains. 11 km - The
              walkway is bumpy but makes up for it more than the view.
              Attractions: Walking along the banks of the Parvati River,
              visiting Manikaran Sahib, trekking up to Tosh, Malana, trying
              delicious food at the cafe, shop, amidst picturesque landscapes,
              enjoying the rustic villages, Parvati Kund (a natural hot spring)
              Go on Activities: Trekking, Camping, Nature Photography Best Time
              to Visit: May to June and October to September
            </p>
          </div>
        </div>
      </div>

      <div class="blog_box">
        <div class="blog_container">
          <div class="blog_img"><img src={Images.manali3} alt="manali3"/></div>
          <div class="blog_content">
            <h2>
              <i style={{ fontSize: "xx-large" }}>Q3 - </i> Why is Kullu Valley
              famous?
            </h2>
            <p>
              The divine beauty of Kullu, known as The Valley of Gods, is being
              liked by travelers from all over the world. Adventurists are
              exploring its forbidden slopes and romantic people are idealizing
              its tranquil landscape. For almost all reasons or no reason at
              all, Kullu has never developed any true ice-loving map. Amazing
              things in Kullu-Manali - Kullu Valley Here is the list of the most
              sought after things in Kullu-Manali.
            </p>
            <p>
              <strong style={{ fontSize: "xx-large" }}>1.</strong> Visit Hot
              Springs in Manikaran: Just 1.5 hours from Kullu, Manikaran's most
              famous hot springs are a sight to the eye. Any experience of
              Kullu-Manali tourism is incomplete without traveling. Attractions:
              Visit Manikaran Gurudwara, Naina Bhagwati Temple, Kheerganga and
              Parvati Valley. Activities: Trekking, shopping, rafting, and going
              on food trails.
            </p>
            <p>
              <strong style={{ fontSize: "xx-large" }}>2.</strong> Spot some
              fauna in the Great Himalayan National Park: With 31 species of
              animals and 181 unnatural species of birds present in the
              Himalayas, wildlife lovers among you will not be disappointed. Of
              all the attractions in the valley, this is one of the more
              aggressive things to do in Kullu Manali. Nearby attractions: Visit
              the Tirthan valley, enjoy wildlife attractions (snow leopards,
              blue sheep, Himalayan brown bears, Himalayan Thar). Activities:
              trekking, camping, bird watching, trout fishing
            </p>
            <p>
              <strong style={{ fontSize: "xx-large" }}>3.</strong> Trek to
              Kheerganga: Located in the Parvati valley, it is easily one of the
              most picturesque treks among the great mountains. 11 km - The
              walkway is bumpy but makes up for it more than the view.
              Attractions: Walking along the banks of the Parvati River,
              visiting Manikaran Sahib, trekking up to Tosh, Malana, trying
              delicious food at the cafe, shop, amidst picturesque landscapes,
              enjoying the rustic villages, Parvati Kund (a natural hot spring)
              Go on Activities: Trekking, Camping, Nature Photography Best Time
              to Visit: May to June and October to September
            </p>
          </div>
        </div>
      </div>

      <div class="blog_box">
        <div class="blog_container">
          <div class="blog_img"><img src={Images.manali4} alt="manali4"/></div>
          <div class="blog_content">
            <h2>
              <i style={{ fontSize: "xx-large" }}>Q4 - </i> When is the Best
              time to go?
            </h2>
            <p>
              If you are going for adventure activities like paragliding trip in
              summer (May to July), but if you want to enjoy skating or skiing
              then go in December.
            </p>
          </div>
        </div>
      </div>

      <div class="bottom_part"></div>
    </>
  );
};
export default Blog1;
