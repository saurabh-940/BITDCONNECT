import React, { Component } from "react";
import ClubCard from "./ClubCard";
import gdscImg from "./assests/gdsc1.png";
import nssImg from "./assests/nss1.png";
import vistImg from "./assests/vista1.jpg";
import tedxImg from "./assests/tedx.jpeg";
import nccImg from "./assests/ncc.jpeg";
import hackImg from "./assests/hack.jpeg";
import "./ComponentCSS.css";
import { Link } from "react-router-dom";

export default class Grid extends Component {
  render() {
    return (
      <>
        <div className="container my-4 text-center ">
          <div className="wrapper nine">
            <div>
              <h3 className="rotate">
                <span>B</span>
                <span>I</span>
                <span>T</span>
                <span style={{marginRight:"2rem"}}>D</span>
                <span>C</span>
                <span>L</span>
                <span>U</span>
                <span>B</span>
                <span>S</span>
              </h3>
            </div>
          </div>
          <div className=" row ">
            <Link
              className="col-md-4 text-dark"
              to="/Club/gdsc"
              style={{ textDecoration: "none" }}
            >
              <ClubCard
                title="GDSC"
                desc="Google Developer Student Clubs (GDSC) are university-based community groups powered by  .....  "
                imgadd={gdscImg}
              />
            </Link>
            <Link
              to={"/Club/nss"}
              style={{ textDecoration: "none" }}
              className="col-md-4 text-dark"
            >
              <ClubCard
                title="NSS"
                desc="The club has been founded in the session 2016-17, and currently, ....."
                imgadd={nssImg}
              />
            </Link>
            <Link
              className="col-md-4 text-dark"
              to={"/Club/vista"}
              style={{ textDecoration: "none" }}
            >
              <ClubCard
                title="Vista"
                desc="A college is not all by itself; it stands on three crucial pillars, namely ACADEMICS, ....... "
                imgadd={vistImg}
              />
            </Link>
          </div>
          <div className="gridRow row my-5">
            <div className="col-md-4">
              <ClubCard
                title="TedX"
                desc="Google Developer Student Clubs (GDSC) are university-based community groups powered by ......"
                imgadd={tedxImg}
              />
            </div>
            <div className="col-md-4">
              <ClubCard
                title="NCC"
                desc="Google Developer Student Clubs (GDSC) are university-based community by ......"
                imgadd={nccImg}
              />
            </div>
            <div className="col-md-4">
              <ClubCard
                title="Hack Club"
                desc="Google Developer Student Clubs (GDSC) are university-based  by ......."
                imgadd={hackImg}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
