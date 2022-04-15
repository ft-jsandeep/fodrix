import React from "react";
import "./packages.css";
import Form from "./Form";
import CardsPackage from "./CardsPackage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import "../../plugins/navbar";
import Whatsapp from "../Whatsapp";
export default function PackageNavbar() {
  return (
    <>
      <Whatsapp />
      <div id="packages">
        <div id="first_package">
          <Link id="packages_link" to="/packages">
            Travel{" "}
          </Link>{" "}
          <Link id="packages_link" className="color" to="/cb_wedding">
            Wedding{" "}
          </Link>{" "}
          <Link id="packages_link" className="color" to="/cb_business">
            Business{" "}
          </Link>
          <Link id="packages_link" className="color" to="/cb_baby">
            Baby
          </Link>
          <Link id="packages_link" className="color" to="/cb_prewedding">
            Pre Wedding
          </Link>
          <Link id="packages_link" className="color" to="/cb_maternity">
            Maternity
          </Link>
          <Link id="packages_link" className="color" to="/cb_personalportrait">
            Personal Portrait
          </Link>
          <Link id="packages_link" className="color" to="/cb_family">
            Family
          </Link>
          <Link id="packages_link" className="color" to="/cb_others">
            Others
          </Link>
        </div>{" "}
      </div>
      <Switch>
        <Route exact path="/cb_wedding">
          <Form myevents="Wedding" />
        </Route>
        <Route exact path="/cb_business">
          <Form myevents="Business" />
        </Route>
        <Route exact path="/cb_baby">
          <Form myevents="Baby" />
        </Route>
        <Route exact path="/cb_prewedding">
          <Form myevents="Pre Wedding" />
        </Route>
        <Route exact path="/cb_maternity">
          <Form myevents="Maternity" />
        </Route>
        <Route exact path="/cb_personalportrait">
          <Form myevents="Personal Portrait" />
        </Route>
        <Route exact path="/cb_family">
          <Form myevents="Family" />
        </Route>
        <Route exact path="/cb_others">
          <Form myevents="Others" />
        </Route>
        <Route exact path="/packages">
          <CardsPackage />
        </Route>
        <Route exact path="/packages">
          <Form />
        </Route>
      </Switch>
    </>
  );
}
