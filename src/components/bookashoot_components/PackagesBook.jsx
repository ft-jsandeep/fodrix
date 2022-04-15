import React from "react";
import "../packages_components/packages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyLocationIcon from "@material-ui/icons/MyLocation";

import paymentStore from "./payment";
export default function PackagesBook() {
  return (
    <div class="packages_code">
      <div class="wrapper">
        <div class="table basic">
          <div class="price-section">
            <div class="price-area">
              <div class="inner-area">
                <div class="price" value="1999" id="p1999">
                  Rs. 1999
                </div>
                <div class="realprices">Rs.2,500</div>
                <div class="text">20% Off</div>
              </div>
            </div>
          </div>
          <div class="package-name"></div>
          <ul class="features">
            <li>
              <div class="list-name">
                {" "}
                <i class="far fa-clock"></i> 1 Hour
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <i class="far fa-image"></i> Unlimited Photos + 15 Photos Edited
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <i class="fas fa-video"></i> Get a Short Video
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <MyLocationIcon />
                1-2 Location(2 km in Range)
              </div>
            </li>
            <li>
              <div class="list-name">
                <i class="fas fa-photo-video"></i> High Resolution Edited Image
              </div>
            </li>
            <li>
              <div class="list-name">
                <i class="fas fa-user"></i> Valid upto 3 people
              </div>
            </li>
          </ul>
          <div class="btn">
            <a href="/payment">
              <button>Next</button>
            </a>
          </div>
        </div>
        <div class="table premium">
          <div class="ribbon">
            <div>Recommend</div>
          </div>
          <div class="price-section">
            <div class="price-area">
              <div class="inner-area">
                <div class="price" value="2999" id="p2999">
                  Rs. 2999
                </div>
                <div class="realprices">Rs.3750</div>
                <div class="text">20% Off</div>
              </div>
            </div>
          </div>
          <div class="package-name"></div>
          <ul class="features">
            <li>
              <div class="list-name">
                <i class="far fa-clock"></i> 2 Hours
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <i class="far fa-image"></i> Unlimited Photos + 25 Photos Edited
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <i class="fas fa-video"></i> Get a Short Video
              </div>
            </li>
            <li>
              <div class="list-name">
                <MyLocationIcon />
                1-2 Location(2 km in Range)
              </div>
            </li>
            <li>
              <div class="list-name">
                <i class="fas fa-photo-video"></i> High Resolution Edited Image
              </div>
            </li>
            <li>
              <div class="list-name">
                <i class="fas fa-user"></i> Valid upto 7 people
              </div>
            </li>
          </ul>

          <div class="btn">
            <a href="/payment">
              <button>Next</button>
            </a>
          </div>
        </div>
        <div class="table ultimate">
          <div class="price-section">
            <div class="price-area">
              <div class="inner-area">
                <div class="price" value="3999" id="p3999">
                  Rs. 3999
                </div>
                <div class="realprices">Rs.5,000</div>
                <div class="text">20% Off</div>
              </div>
            </div>
          </div>
          <div class="package-name"></div>
          <ul class="features">
            <li>
              <div class="list-name">
                {" "}
                <i class="far fa-clock"></i> 3 Hours
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <i class="far fa-image"></i> Unlimited Photos + 40 Photos Edited
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <i class="fas fa-video"></i> Get a Short Video
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <MyLocationIcon />
                Multiple Location(5 km in Range)
              </div>
            </li>
            <li>
              <div class="list-name">
                <i class="fas fa-photo-video"></i> High Resolution Edited Image
              </div>
            </li>
            <li>
              <div class="list-name">
                <i class="fas fa-user"></i> Valid upto 7 people
              </div>
            </li>
          </ul>
          <div class="btn">
            <a href="/payment">
              <button onClick={paymentStore}>Next</button>
            </a>
          </div>
        </div>
        <div class="table ultimate">
          <div class="price-section">
            <div class="price-area">
              <div class="inner-area">
                <div class="price" value="7999" id="p7999">
                  Rs. 7999
                </div>
                <div class="realprices">Rs.10,000</div>
                <div class="text">20% Off</div>
              </div>
            </div>
          </div>
          <div class="package-name"></div>
          <ul class="features">
            <li>
              <div class="list-name">
                <i class="far fa-clock"></i> 120 minutes
              </div>
            </li>
            <li>
              <div class="list-name">
                <i class="far fa-image"></i> Unlimited Photos + 30 Photos Edited
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <i class="fas fa-video"></i> Drone Video Shoot
              </div>
            </li>
            <li>
              <div class="list-name">
                {" "}
                <MyLocationIcon />
                Multiple Location(2 km in Range)
              </div>
            </li>

            <li>
              <div class="list-name">
                <i class="fas fa-photo-video"></i> High Resolution Edited Image
              </div>
            </li>
            <li>
              <div class="list-name">
                <i class="fas fa-user"></i> Valid upto 7 people
              </div>
            </li>
          </ul>
          <div class="btn">
            <a href="/payment">
              <button>Next</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
