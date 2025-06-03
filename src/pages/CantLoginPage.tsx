import { Link } from "react-router";
import img from "../assets/BakaRateLoginPng.jpg";
export default function CantLoginPage() {
  
  return (
    <div
      className="h-screen bg-cover text-white flex flex-row justify-center items-center  "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-120 w-130 mb-40  bg-purple-700/14 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-lg shadow-black ">
        <div className=" flex flex-col justify-center items-center p-3.5 text-2xl gap-10">
          <div className="gap-4 font-sans text-center">
            <span>Baka</span>
            <span className="text-purple-950 ">Rate</span>
            <h1 className="font-semibold"> Reset Your Password</h1>
          </div>
        </div>
        <p className="text-center p-4">
          Enter your BakaRate account email address and we'll send you a
          security code
        </p>
        <div className="flex flex-col justify-center items-center gap-5 pt-2 mt-3">
          <div>
            <h1 className="ml-0.5">Email</h1>
            <input
              className="   bg-purple-600/2  w-60  h-9 rounded-lg border-black border p-1 hover:border-white mt-1"
              placeholder="Example@gmail.com"
            />
          </div>

          <Link
            to="/"
            className="text-2xl  hover:text-purple-600/30 hover:font-extrabold hover:shadow-2x1"
          >
            Continue{" "}
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div>
            <Link
              to="/"
              className="underline hover:text-purple-600/30 hover:font-extrabold"
            >
              {" "}
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
