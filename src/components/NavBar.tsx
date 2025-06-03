import { SearchInput } from "../types";
import SearchBar from "./SearchBar";
import { ArrowDownUp } from "lucide-react";
import { Link } from "react-router";
import img from "../assets/Dark-Moon-Purple-HD-Wallpaper.jpg";
export default function NavBar({
  search,
  setSearch,
  sort,
  setSort,
  setShowFeatured,
}: SearchInput) {
  return (
    <div
      className=" top-0 flex flex-row justify-around items-center h-20 w-full  bg-clip-padding backdrop-filter backdrop-blur-lg  "
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="text-4xl hover:scale-110 transition-all duration-300 ease-in-out bg-transparent">
        <Link to="/HomePage"  onClick={() => setShowFeatured(true)}>
          Baka<span className="text-purple-950 ">Rate</span>
        </Link>
      </h1>
      <div>
        <h1 className="text-2xl hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out bg-transparent">
          <Link to="/HomePage" onClick={() => setShowFeatured(true)}>
            Home
          </Link>
        </h1>
      </div>
      <h1 className="text-2xl hover:scale-110 transition-all duration-300 ease-in-out bg-transparent">
        <a href="#">
          <Link to="/HomePage" onClick={() => setShowFeatured(false)}>
            Anime
          </Link>
        </a>
      </h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setSort={setSort}
        sort={sort}
        setShowFeatured={setShowFeatured}
      />
      <button
        className="p-4 hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out bg-transparent"
        onClick={() => {
          console.log("sort clicked", sort);
          setSort(sort == "asc" ? "desc" : "asc");
          setShowFeatured(false);
        }  } 
      >
        <ArrowDownUp className="hover:cursor-pointer" />
      </button>
      <h1 className="text-2xl hover:scale-110 transition-all duration-300 ease-in-out bg-transparent">
        <Link to="/Profile">Profile</Link>
      </h1>
    </div>
  );
}
