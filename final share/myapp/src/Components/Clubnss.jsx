import React, { Component, useEffect, useState } from "react";
import nssImg from "./assests/nss1.png";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import EventCard from "./EventCard";
import axios from "axios";

export default function Clubnss() {
  const url = "http://localhost:4000/";
  const [eve, seteve] = useState([]);

  useEffect(() => {
    getAllEvent();
  }, []);

  const getAllEvent = async () => {
    const res = await axios.get(`${url}/Club`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      seteve(res.data.getEve);
    }
  };
  return (
    <>
      <div>
        <Link to={"/"}>
          <div className="back_btn">
            <MdArrowBackIosNew />
          </div>
        </Link>
        <header>
          <div>
            <img src={nssImg} alt="..." />
          </div>
          <div className="clubpage_info">
            <h1>NSS</h1>
            <p>
              The post-independence era was marked by an urge for introducing
              social service for students, both as a measure of educational
              reform and as a means to improve the quality of educated
              man-power. The main objective was to develophealthy contacts
              between the students and teachers on the one hand and establishing
              a constructive linkage between the campus and the community on the
              other hand.
            </p>
            <div className="social">
              <a href="#" className="fa fa-facebook " target={"_blank"}></a>
              <a
                href="https://twitter.com/gdscbitd"
                className="fa fa-twitter "
                target={"_blank"}
              ></a>
              <a
                href="https://www.instagram.com/gdscbitd/"
                className="fa fa-instagram "
                target={"_blank"}
              ></a>
              <a href="#" className="fa fa-linkedin " target={"_blank"}></a>
              <a
                className="btn btn-outline-primary "
                href="https://gdsc.community.dev/bhilai-institute-of-technology-durg/"
                role="button"
                target={"_blank"}
              >
                NSS
              </a>
            </div>
          </div>
        </header>
        <main>
          <h2 className="text-center mb-5">UPCOMING EVENTS</h2>
          {eve.map((ele) =>
            ele.club === "nss" ? (
              <EventCard
                key={ele.eventname}
                eventname={ele.eventname}
                eventdesc={ele.eventdesc}
                eventdate={ele.eventdate}
                venue={ele.venue}
                reglink={ele.reglink}
                eventlink={ele.eventlink}
                evePoster={ele.evePoster}
                date={ele.date}
                id={ele._id}
              />
            ) : null
          )}
        </main>
      </div>
    </>
  );
}
