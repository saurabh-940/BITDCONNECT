import React from "react";
import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EventCard(props) {
  const regl = props.reglink;
  const evel = props.eventlink;
  const user = JSON.parse(localStorage.getItem("MyUser"));
  const url = "http://localhost:4000/";

  const delEvent = async (id) => {
    const res = await axios.delete(`${url}/${id}/Delete`).then(() => {
      toast.success("Event Deleted", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      window.location.reload();
    });
  };

  return (
    <>
      <div className="event bg-light">
        <img
          className="event_poster"
          src={`http://localhost:4000/uploads/${props.evePoster}`}
          alt=""
          style={{ objectFit: "contain", height: "16rem" }}
        />
        <div className="event_details">
          <h2>{props.eventname}</h2>
          <p>{props.eventdesc}</p>
          <h5>EventDate - {props.eventdate}</h5>
          <h5>Venue - {props.venue}</h5>
          <div>
            <a className="clubpage-link " target={"_blank"} href={regl}>
              Register
            </a>
            <a className="clubpage-link" target={"_blank"} href={evel}>
              Explore
            </a>
          </div>
          <div className="posted_date mt-3">
            <p>Posted On - {moment(props.date).format("LL")}</p>
            {user.email === undefined ? null : (
              <button className="del_button" onClick={() => delEvent(props.id)}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
