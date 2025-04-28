import "./Style/ClubPage.scss";
import React from "react";
import { useEffect, useState } from "react";
import Grid from "./Components/Grid";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clubgdsc from "./Components/Clubgdsc";
import EventAddPage from "./Components/EventAddPage";
import Clubnss from "./Components/Clubnss";
import Clubvista from "./Components/Clubvista";
import Login from "./Components/Login";
import Calender from "./Components/Calendar";
import Register from "./Components/Register";
import About from "./Components/About";

function App() {
  const [user, setLoginUser] = useState({});

  // useEffect(() => {
  //   setLoginUser(JSON.parse(localStorage.getItem("MyUser")));
  // }, []);

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setLoginUser(user);
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<Grid />}></Route>
            <Route exact path="/Club/gdsc" element={<Clubgdsc />}></Route>
            <Route exact path="/Club/nss" element={<Clubnss />}></Route>
            <Route exact path="/Club/vista" element={<Clubvista />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Register" element={<Register />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Calender" element={<Calender/>}></Route>
            <Route
              exact
              path="/ClubProfile"
              element={
                user && user._id ? (
                  <EventAddPage updateUser={updateUser} />
                ) : (
                  <Login updateUser={updateUser} />
                )
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
