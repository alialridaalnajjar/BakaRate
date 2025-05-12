import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/BakaRateLoginPng.png";
import RejectLogin from "../components/RejectLogin";

export default function Login() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [reject, setReject] = useState(false);
  const navigate = useNavigate();
  const passwordInputRef = useRef<HTMLInputElement>(null); // AL !?  

  const loginCheck = () => {
    if (password.trim() === "123" && userName.trim() === "123") {
      navigate("/HomePage");
      setReject(false);
    } else {
      setReject(true);
    }
  };
//AL ?
  const handleKeyDownUsername = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      passwordInputRef.current?.focus();
      e.preventDefault();
    }
  };
//AL ?
  const handleKeyDownPassword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loginCheck();
    }
  };

  return (
    <div
      className="h-screen bg-cover text-white  flex flex-row justify-center items-center "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-108 w-112 mb-40  bg-purple-700/14 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-lg shadow-black ">
        <div className=" flex flex-col justify-center items-center p-3.5 text-2xl gap-10">
          <div className="gap-4 font-sans text-center">
            Baka<span className="text-purple-950 ">Rate</span>
            <h1 className="text-center">Login</h1>
            <h2 className="font-light">
              {" "}
              Welcome again! Lets see some ratings.
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 pt-2">
          <div>
            <h1>Username</h1>
            <input
              className="   bg-purple-600/2  w-60  h-9 rounded-lg border-black border p-1 hover:border-white "
              placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleKeyDownUsername}
            />
          </div>
          <div>
            <h1>Password</h1>
            <input
              ref={passwordInputRef}
              className="   bg-purple-600/2  w-60  h-9 rounded-lg border-black border p-1 hover:border-white"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}

              onKeyDown={handleKeyDownPassword}
            />
              <div className="  mt-2">
              {reject && <RejectLogin />}
            </div>
          
          </div>

          <button
            onClick={loginCheck}
            className="text-2xl  hover:text-purple-600/30 hover:font-extrabold hover:shadow-2x1"
          >
            Login
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <Link
            className="underline  hover:text-purple-600/30 hover:font-extrabold"
            to="/CantLoginPage"
          >
            Cant Login?
          </Link>
          <div>
            Not a user yet?
            <Link
              to="/SignUpPage"
              className="underline hover:text-purple-600/30 hover:font-extrabold mb-5"
            >
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}