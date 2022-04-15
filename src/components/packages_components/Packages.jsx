import React, { useEffect } from "react";
import "./packages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "../../plugins/navbar";
import PackageNavbar from "./PackageNavbar";
import CardsPackage from "./CardsPackage";
// import PackageNav from "./components/packages_components/PackageNavbar";
export default function Package() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Affordable Packages for Photography | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Best Photographer Pricing for Travel, Pre-wedding, Wedding, etc. with Fodrix. Book a professional photographer all over India & get your photos within 48 hours."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/packages");
  }, []);
  return (
    <>
      {/* <BrowserRouter>
        <PackageNavbar />
      </BrowserRouter> */}
      <CardsPackage />
    </>
  );
}
