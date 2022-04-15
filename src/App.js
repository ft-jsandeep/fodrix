import React from "react";
import "./App.css";

import TermsConditions from "./components/footer_components/TermsConditions";
import { Route, Switch, withRouter, useHistory } from "react-router-dom";
import PackagesBook from "./components/bookashoot_components/PackagesBook";
import BookNow from "./components/bookashoot_components/BookNow";
import privacyPolicy from "./components/footer_components/PrivacyPolicy";
import CancPolicy from "./components/footer_components/CancPolicy";

import Form from "./components/packages_components/Form";
import usersdashboard from "./components/Dashboard_components/Userdashboard";
import PhotographerLogin from "./components/login_components/PhotographerLogin";
import PhotoshootServices from "./components/homePage_components/PhotoshootServices";

import Blog1 from "./components/blogs_components/Blog1";

import PaymentForm from "./components/bookashoot_components/PaymentForm";
import OTP from "./components/bookashoot_components/OTP.jsx";
import CardsPackage from "./components/packages_components/CardsPackage";
import CityHome from "./components/CityHome_components/CityHome";
import Career from "./components/footer_components/Career";
import BecomeFodrixographer from "./components/footer_components/BecomeFodrixographer";
import BecomePartner from "./components/footer_components/BecomePartner";
import ContactUs from "./components/footer_components/contactUs";
import BlogsHome from "./components/blogs_components/BlogsHome";
import Blogsread from "./components/blogs_components/Blogsread";
import ErrorFodrix from "./components/homePage_components/ErrorFodrix";
import PackageNavbar from "./components/packages_components/PackageNavbar";
import Testinomials from "./components/testinomial_components/Testinomials";

import Dashboard from "./components/Dashboard_components/Dashboard";
import NewDashboard from "./components/New-Dashboard__components/NewDashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/Dashboard_components/Authentication/ProtectedRoute";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/footer_components/Footer";
import Footercity from "./components/footer_components/FooterComponent/FooterCity";
import OfferAlert from "./mainUtils/OfferAlert";
import DashboardProfile from "./components/New-Dashboard__components/DashboardProfile";
import NewUserDashboard from "./components/Dashboard_components/NewUserDashboard";
// global.loggedIn = true;

function App() {
  const history = useHistory();
  return (
    <>
      {history.location.pathname.includes("dashboard") ? null : <OfferAlert />}
      {history.location.pathname.includes("dashboard") ? null : <Navbar />}

      <Switch>
        <Route exact path="/tNc" component={TermsConditions} />

        <Route exact path="/book" component={BookNow} />
        <Route exact path="/privacyPolicy" component={privacyPolicy} />
        <Route exact path="/cancellationPolicy" component={CancPolicy} />

        <Route exact path="/packages_book" component={PackagesBook} />
        <Route exact path="/pLogin" component={PhotographerLogin} />

        <Route exact path="/blog1" component={Blog1} />

        <Route exact path="/payment" component={PaymentForm} />
        <Route exact path="/OTP" component={OTP} />
        <Route exact path="/City_Home" component={CityHome} />
        <Route
          exact
          path="/BecomeFodrixographer"
          component={BecomeFodrixographer}
        />
        <Route exact path="/Career" component={Career} />
        <Route exact path="/BecomePartner" component={BecomePartner} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/testimonial" component={Testinomials} />
        <Route
          exact
          path="/photoshoot_services"
          component={PhotoshootServices}
        />
        <Route exact path="/blogs" component={BlogsHome} />
        <Route exact path="/blogsread" component={Blogsread} />

        {/* <Route exact path="/travel" component={CardsPackage}></Route> */}
        {/* <Route exact path="/cb_wedding" component={PackageNavbar}></Route>

        <Route exact path="/cb_business" component={PackageNavbar}></Route>
        <Route exact path="/cb_baby" component={PackageNavbar}></Route>
        <Route exact path="/cb_prewedding" component={PackageNavbar}></Route>
        <Route exact path="/cb_maternity" component={PackageNavbar}></Route>
        <Route
          exact
          path="/cb_personalportrait"
          component={PackageNavbar}
        ></Route> */}
        {/* <Route exact path="/cb_family" component={PackageNavbar}></Route>
        <Route exact path="/cb_others" component={PackageNavbar}></Route> */}
        <Route exact path="/dashboard/profile" component={NewDashboard} />
        <ProtectedRoute
          exact
          path="/userdashboard"
          component={NewUserDashboard}
        ></ProtectedRoute>

        <ProtectedRoute
          exact
          path="/dashboard"
          component={NewDashboard}
        ></ProtectedRoute>
      </Switch>

      {/* <Route>
        <PackageNavbar />
      </Route> */}
      {/* <Route exact strict component={ErrorFodrix} /> */}
      {history.location.pathname.includes("dashboard") ? null : <Footer />}
    </>
  );
}

export default withRouter(App);
