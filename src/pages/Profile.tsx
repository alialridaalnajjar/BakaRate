import img from "../assets/Dark-Moon-Purple-HD-Wallpaper.jpg";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-cover bg-no-repeat bg-center h-screen p-10   "
    >
      <div className="h-full w-full  shadow-2xl shadow-black rounded-xl  bg-violet-950/20  backdrop-blur-lg object-fit  mask-r-to-violet-500/60 p-20 flex flex-row justify-between gap-30 ">
        <div className="flex flex-col justify-around gap-100">
          <div className="h-70 w-70  flex flex-col justify-center items-center gap-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
              className="rounded-full object-contain hover:cursor-pointer"
              alt="img"
            />
            <div className="rounded-xl p-1 bg-indigo-950/50 text-white">
              #F24J@kl
            </div>
          </div>
          <Link to="/" className="text-white underline ">LogOut</Link>
        </div>
        <div className="h-full w-5  bg-indigo-900/50 rounded-4xl  shadow-black  shadow-2xl  mr-50"></div>
        <div>
          <div>Name</div>
          <div>Password</div>
          <div>Email Address</div>
        </div>{" "}
        <div className="h-full w-5  bg-indigo-900/50 rounded-4xl  shadow-black  shadow-2xl mr-50 "></div>
        <div>2</div>
      </div>
      //back Link to home page
      <div className="absolute bottom-10 right-10">
        <Link
          to="/HomePage"
          className="bg-violet-500/20 text-white rounded-full p-2 hover:bg-violet-500/50"
        >
          {" "}
          Back to Home
        </Link>{" "}
      </div>
    </div>
  );
}
