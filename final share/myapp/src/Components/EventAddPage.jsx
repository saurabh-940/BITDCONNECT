import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";


const EventAddPage = ({ updateUser }) => {

  const url = "http://localhost:4000/";
  const eventDes = {
    club: "",
    eventname: "",
    eventdesc: "",
    eventdate: "",
    venue: "",
    reglink: "",
    eventlink: "",
  };

  const [eve, seteve] = useState(eventDes);
  const [file, setfile] = useState("");
  const handelfileUplod = async (e) => {
    setfile(e.target.files[0]);
  };

  const handelOnChange = (e) => {
    seteve({ ...eve, [e.target.name]: e.target.value });
  };

  const addEveDetails = async (e) => {
    // e.preventDefault();
    var formdata = new FormData();
    formdata.append("photo", file);
    formdata.append("club", eve.club);
    formdata.append("eventname", eve.eventname);
    formdata.append("eventdesc", eve.eventdesc);
    formdata.append("eventdate", eve.eventdate);
    formdata.append("venue", eve.venue);
    formdata.append("reglink", eve.reglink);
    formdata.append("eventlink", eve.eventlink);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios
      .post(`${url}/AddEvent`, formdata, config)
      .then(() => {
        toast.success("Event Added", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch(() => {
        toast.error("ERROR", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const Logout = () => {
    updateUser({});
    
  };
  return (
    <>
      <div className="mt-4 mb-4">
        <h4>Club</h4>
        <select
          style={{ border: "1px black solid" }}
          className="form-select"
          name="club"
          onChange={(e) => handelOnChange(e)}
          aria-label="Default select example"
        >
          <option defaultValue="">Open this select menu</option>
          <option value="gdsc">GDSC</option>
          <option value="nss">NSS</option>
          <option value="ncc">NCC</option>
          <option value="vista">VISTA</option>
        </select>
      </div>

      <div className="mb-4">
        <h4 htmlFor="exampleFormControlInput1" className="form-label">
          Event Heading
        </h4>
        <input
          style={{ border: "1px black solid" }}
          type="text"
          onChange={(e) => handelOnChange(e)}
          className="form-control"
          name="eventname"
        />
      </div>
      <div className="mb-3">
        <h4 htmlFor="exampleFormControlTextarea1" className="form-label">
          Event Description
        </h4>
        <input
          style={{ border: "1px black solid" }}
          className="form-control"
          id="descInput"
          onChange={(e) => handelOnChange(e)}
          rows="2"
          name="eventdesc"
        />
      </div>
      <div className="mb-3">
        <h4 htmlFor="exampleFormControlInput1" className="form-label">
          Event Date (as you want to display)
        </h4>
        <input
          style={{ border: "1px black solid" }}
          className="form-control"
          id="descInput"
          name="eventdate"
          required
          onChange={(e) => handelOnChange(e)}
        />
      </div>
      <div className="mb-3">
        <h4 htmlFor="exampleFormControlInput1" className="form-label">
          Venue
        </h4>
        <input
          style={{ border: "1px black solid" }}
          type="text"
          onChange={(e) => handelOnChange(e)}
          className="form-control"
          id="venue"
          name="venue"
        />
      </div>
      <div className="mb-3">
        <h4 htmlFor="exampleFormControlInput1" className="form-label">
          Registration Link
        </h4>
        <input
          style={{ border: "1px black solid" }}
          className="form-control"
          id="reglinkInput"
          type="text"
          onChange={(e) => handelOnChange(e)}
          placeholder="https://example.com"
          name="reglink"
        />
      </div>
      <div className="mb-3">
        <h4 htmlFor="exampleFormControlInput1" className="form-label">
          Event Link
        </h4>
        <input
          style={{ border: "1px black solid" }}
          className="form-control"
          id="linkInput"
          type="text"
          onChange={(e) => handelOnChange(e)}
          name="eventlink"
          placeholder="https://example.com"
        />
      </div>
      <div className="mb-3">
        <h4 htmlFor="exampleFormControlInput1" className="form-label">
          Event Poster
        </h4>
        <input
          onChange={(e) => handelfileUplod(e)}
          type="file"
          id="imgInput"
          name="evePoster"
          accept=".jpeg,.png,.jpg"
        />
      </div>
      <div
        className="box2"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <button
          type="submit"
          onClick={() => addEveDetails()}
          className="btn btn-primary "
        >
          Done
        </button>

        <div
          type="button"
          className="btn btn-danger "
          onClick={() => Logout({})}
        >
          Logout
        </div>
      </div>

      <hr />
    </>
  );
};
export default EventAddPage;
