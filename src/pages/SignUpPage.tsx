import { useState } from "react";
import img from "../assets/BakaRateLoginPng.jpg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router";
export default function Login() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  
  return (
    <div
      className="h-screen bg-cover text-white flex flex-row justify-center items-center  "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-150 w-112 mb-40  bg-purple-700/14 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-lg shadow-black ">
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
        <div className="flex flex-col justify-center items-center gap-5 pt-2 mt-3">
          <div>
            <h1>Name</h1>
            <input
              className="   bg-purple-600/2  w-60  h-9 rounded-lg border-black border p-1 hover:border-white "
              placeholder="Enter your name"
            />
          </div>

          <div>
            <h1>Username</h1>
            <input
              className="  bg-purple-600/2  w-60  h-9 rounded-lg border-black border p-1 hover:border-white"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <h1>Birthdate</h1>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className=" bg-purple-600/2  w-60  h-9 rounded-lg border-black border p-1 hover:border-white"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-5">
            <div>
              <h1>Password</h1>
              <input
                className="  bg-purple-600/2  w-40 h-9 rounded-lg border-black border p-1 hover:border-white"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <h1>Confirm Password</h1>
              <input
                className="  bg-purple-600/2  w-40 h-9 rounded-lg border-black border p-1 hover:border-white"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <Link
            to="/HomePage"
            className="text-2xl  hover:text-purple-600/30 hover:font-extrabold hover:shadow-2x1"
          >
            Sign up{" "}
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div>
            Have an account already?
            <Link
              to="/"
              className="underline hover:text-purple-600/30 hover:font-extrabold"
            >
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
