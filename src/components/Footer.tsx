import { Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router";
export default function Footer() {
  return (
    <div className="flex flex-col justify-center bg-black  pt-6.5">
      <div className=" flex flex-row justify-around items-start">
        <div>
          <div className="font-bold">Contact</div>
          <div className="font-extralight">
            <h4> Lorem Ipsum Avenue</h4>
            <h4>& 7-9 yeehaw Street, </h4>
            <h4>Lebneeen 7-9,</h4>
            <h4> Loremoo 6308, Niahoyy</h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 pb-2 mb-2">
          <h1 className="font-bold">Explore</h1>
          <Link to="/HomePage" className="underline">
            Homepage
          </Link>{" "}
          <Link to="/HomePage" className="underline">
            All animes
          </Link>{" "}
          <Link to="/HomePage" className="underline">
            Profile
          </Link>
        </div>
        <div className="font-bold">
          About us
          <div className="font-extralight underline">
            <a href="mailto:alialridaalnajjar@gmail.com?subject=Website Inquiry&body=Hello, I have a question about...">
              Email me
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <h1>New settler</h1>
            <div className="flex flex-row justify-center items-center border border-white rounded-lg p-1 ">
              <input placeholder="example@gmail.com" className="  " /> <Send />
            </div>
          </div>
          <div className="flex flex-row justify-around items-center gap-5 text-3xl ">
            <a href="https://www.instagram.com/g0at32/?__pwa=1">
              {" "}
              <LuInstagram className="hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/ali-al-najjar-88a801324/">
              <FaLinkedin className="hover:scale-110" />
            </a>
            <a href="https://github.com/alialridaalnajjar">
              <FaGithub className="hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
      <div className="font-extralight text-xs text-center mb-5">
        © 2025 Ali Al Najjar - All Rights Reserved.
      </div>
    </div>
  );
}
