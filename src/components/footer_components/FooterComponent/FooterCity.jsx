import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./FooterCity.css";

const Footercity = () => {
  const history = useHistory();
  // const [city1, setCity] = useState("");
  // window.onload = function handleClick() {
  //   localStorage.setItem("city", city);
  //   history.push("/City_Home");
  // };

  return (
    <>
      {/* ============================= */}

      <footer className="foooter">
        <div className="containerr ">
          <h4 style={{ marginLeft: "11px", marginBottom: "15px" }}>
            Top Locations
          </h4>
          <div className="roww ">
            <div className="footer-coll">
              <ul>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Mumbai");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Mumbai
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Delhi");
                      history.push("/City_Home");
                    }}
                  >
                    Delhi
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Banglore");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Bangalore
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Lucknow");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Lucknow
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Heyderabad");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Heyderabad
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Ahmedabad");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Ahmedabad
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Chennai");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Chennai
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-coll">
              {/* <h4>Top Locations</h4> */}
              <ul>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Kolkata");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Kolkata
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Surat");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Surat
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Pune");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Pune
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Kanpur");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    kanpur
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Patna");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Patna
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Jaipur");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Jaipur
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Nagpur");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Nagpur
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-coll">
              {/* <h4>Top Locations</h4> */}
              <ul>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Raipur");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Raipur
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Agra");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Agra
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Jodhpur");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Jodhpur
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Guwahati");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Guwahati
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Shilong");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Shillong
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Bhopal");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Bhopal
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Kolkata");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Calicut
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-coll">
              {/* <h4>Top Locations</h4> */}
              <ul>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Mysore");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Mysore
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Varanasi");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Varanasi
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Srinagar");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Srinagar
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Nashik");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Nashik
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Dharamshala");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Dharamshala
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Calangute, Goa");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Calangute, Goa
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Indore");
                      history.push("/City_Home");
                    }}
                  >
                    {" "}
                    Indore
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footercity;
