import React from "react";
import { Component } from "react";
import Images from "../All_Images/Images";

import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Home from "./Home";
import HowitWorks from "./HowItWorks_components/HowItWorks";
import Portfolio from "./portfolio_components/Portfolio";
import Packages from "./packages_components/Packages";
import RequestBooking from "./Requestbooking_components/RequestBooking";
import AboutUs from "./aboutus_components/AboutUs";
import loginjs from "./login_components/loginjs";
import Login from "./login_components/Login";
import Faq from "./faqs_components/Faq";
import BookNow from "./bookashoot_components/BookNow";
import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins/navbar";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../css/Navi.css";

export default class Navi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    render() {

        const show = (this.state.menu) ? "show" : "";

        return ( <
            >
            <
            nav className = "navbar navbar-expand-lg navbar-light bg-light" >
            <
            Link className = "navbar-brand"
            to = "/" > < img src = { Images.fodrixiconnew }
            className = "image"
            width = "130px"
            height = "71px"
            alt = "Fodrix Logo"
            style = {
                { height: "57px", width: "100px" }
            }
            /> < /
            Link > <
            button className = "navbar-toggler"
            type = "button"
            onClick = { this.toggleMenu } >
            <
            span className = "navbar-toggler-icon" > < /span> < /
            button > <
            div id = 'collapse'
            className = { "collapse navbar-collapse " + show } >
            <
            div id = 'right'
            className = "navbar-nav" >
            <
            Link className = "nav-item nav-link"
            to = "/portfolio" > portfolio < /Link> <
            Link className = "nav-item nav-link"
            to = "/packages" > packages < /Link> <
            Link className = "nav-item nav-link"
            to = "/HowItWorks" > How it Works < /Link>    <
            Link className = "nav-item nav-link"
            to = "/about_us" > AboutUs < /Link> <
            Link className = "nav-item nav-link"
            to = "/login" > login < /Link>

            <
            a className = 'nav-item nav-link'
            href = "tel:07020147576" > < i className = "fas fa-phone-alt" > < /i> 07020147576 < /a >



            <
            Link className = "nav-item nav-link"
            to = "/requestBooking" > < button className = 'btn btn-primary' > Book A Shoot < i className = "fas fa-hand-point-up" > < /i> < /button > < /Link >


            <
            /
            div > <
            /div> < /
            nav >


            <
            Switch >
            <
            Route exact path = "/" >
            <
            Home / >
            <
            /Route> <
            Route exact path = "/portfolio" >
            <
            Portfolio / >
            <
            /Route> <
            Route exact path = "/HowItWorks" >
            <
            HowitWorks / >
            <
            /Route> <
            Route exact path = "/packages" >
            <
            Packages / >
            <
            /Route> <
            Route exact path = "/requestBooking" >
            <
            RequestBooking / >
            <
            /Route> <
            Route exact path = "/about_us" >
            <
            AboutUs / >
            <
            /Route> <
            Route exact path = "/login" >
            <
            Login / >
            <
            /Route> <
            Route exact path = "/faq" >
            <
            Faq / >
            <
            /Route> <
            Route exact path = "/booking" >
            <
            BookNow / >
            <
            /Route> < /
            Switch >

            <
            />
        );
    }
}