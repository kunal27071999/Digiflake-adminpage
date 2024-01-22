import React from "react";
import TransLogo from "../Assets/Home/TransLogo.png";
import LogoutLogo from "../Assets/Home/LogoutLogo.png";
import home from "../Assets/Home/home.png";
import category from "../Assets/Home/categoru.png";
import products from "../Assets/Home/products.png";
import arrow from "../Assets/Home/Arrow.png";
import digitalflakelogo from "../Assets/Login/digitalflakeloginlogo.png";
import { Link } from "react-router-dom";
import SideNavBar from "./SideNavBar";

export default function Home() {
  return (
    <div>
      <div
        style={{
          width: "1728px",
          height: "1117px",
          top: "-1699px",
          left: "-303px",
        }}
      >
        <SideNavBar />
        {/* Home Component */}
        <div>
          <div
            style={{
              position: "absolute",
              width: "341px",
              height: "179px",
              top: "361px",
              left: "875px",
            }}
          >
            <img src={digitalflakelogo} />
          </div>
          <div
            style={{
              position: "absolute",
              width: "468px",
              height: "41px",
              top: "549px",
              left: "811px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "38.73px",
              color: "#040404",
            }}
          >
            Welcome to Digitalflake Admin
          </div>
        </div>
      </div>
    </div>
  );
}
