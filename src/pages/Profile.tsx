import img from "../assets/Dark-Moon-Purple-HD-Wallpaper.jpg";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-cover bg-no-repeat bg-center min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-10 tracking-wide select-none">
        Baka<span className="text-purple-400">Rate</span>
      </h1>
      <div className="mb-20 w-full max-w-3xl mx-auto shadow-2xl shadow-black rounded-2xl bg-violet-950/40 backdrop-blur-lg p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-20 transition-all duration-300">
   
        < div className="flex flex-col items-center gap-6 md:gap-10 w-full md:w-1/3">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
            className="rounded-full object-cover w-32 h-32 border-4 border-violet-700 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-400"
            alt="Profile avatar"
          />
          <div className="rounded-xl px-4 py-1 bg-indigo-950/70 text-white font-mono text-sm shadow select-all transition-colors duration-300 hover:bg-indigo-900/80">
            #F24J@kl
          </div>
          <Link
            to="/"
            className="text-white underline hover:text-violet-400 transition text-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            Log Out
          </Link>
        </div>
    
        <div className="hidden md:block h-56 w-1 bg-indigo-900/50 rounded-2xl shadow-black shadow-xl"></div>
  
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-4 select-none">
            Profile Info
          </h2>
          <div className="flex flex-col gap-4">
            <div className="transition-colors duration-200 hover:bg-violet-900/30 rounded-lg px-2 py-1">
              <span className="font-semibold text-violet-300">Name:</span>{" "}
              <span className="text-white">#fdvds21sdx</span>
            </div>
            <div className="transition-colors duration-200 hover:bg-violet-900/30 rounded-lg px-2 py-1">
              <span className="font-semibold text-violet-300">Email:</span>{" "}
              <span className="text-white">example.doe@email.com</span>
            </div>
            <div className="transition-colors duration-200 hover:bg-violet-900/30 rounded-lg px-2 py-1">
              <span className="font-semibold text-violet-300">Password:</span>{" "}
              <span className="text-white">F2********</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Link
              to="/HomePage"
              className="bg-violet-600 hover:bg-violet-800 text-white rounded-full px-6 py-2 transition font-semibold focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              Back to Home
            </Link>
            <button className="bg-indigo-800 hover:bg-indigo-900 text-white rounded-full px-6 py-2 transition font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 active:scale-95">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
