import React, { useState } from "react";
import "../Style/Login.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ updateUser }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login2 = () => {
    axios.post("http://localhost:4000/Login", user).then((res) => {
      // alert(res.data.message);
      // updateUser(res.data.user);
      if (res.data.message === "Login Successfull") {
        toast.success("Login Successfull", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updateUser(res.data.user);
      }
      if (res.data.message === "User not registered") {
        toast.warn("User not registered", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updateUser(res.data.user);
      }
      if (res.data.message === "Password didn't match") {
        toast.error("Password didn't match", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updateUser(res.data.user);
      } else {
        updateUser(res.data.user);
      }
    });
  };

  const showPassword = () => {
    const x = document.getElementById("password");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <div className="box">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={user.email}
          onChange={handleChange}
        ></input>

        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={user.password}
          onChange={handleChange}
          id="password"
        ></input>
        <div>
          <input type="checkbox" onClick={showPassword} />
          <label style={{ marginLeft: "6px" }}>Show Password</label>
        </div>

        <div className="button" onClick={login2}>
          Login
        </div>
        {/* <div>or</div>
        <Link className="button" to="/Register">
          Register
        </Link> */}
      </div>
    </div>
  );
};
export default Login;
