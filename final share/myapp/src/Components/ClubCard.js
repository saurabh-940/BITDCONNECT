import React, { Component } from "react";
import "./ComponentCSS.css";
import { BsArrowRight } from "react-icons/bs";

export default class ClubCard extends Component {
  render() {
    let { title, desc, imgadd } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            src={imgadd}
            className="img-fluid"
            alt="Responsive image"
            style={{
              width: "auto!important",
              height: "290px",
              objectFit: "contain",
            }}
          />
          <div className="card-body">
            <h5 className="titel card-img-top">{title}</h5>
            <p className="card-text ">{desc}</p>
          </div>
          <button className="explore mb-3">
            Explore <BsArrowRight />
          </button>
        </div>
      </div>
    );
  }
}
