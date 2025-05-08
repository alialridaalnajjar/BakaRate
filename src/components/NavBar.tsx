import { SearchInput } from "../types";
import SearchBar from "./SearchBar";
import { ArrowDownUp } from "lucide-react";
import { Link } from "react-router";
export default function NavBar({
  search,
  setSearch,
  sort,
  setSort,
  setShowFeatured
}: SearchInput) {
  return (
    <div className=" top-0 flex flex-row justify-around items-center h-20 w-full bg-violet-900  bg-clip-padding backdrop-filter backdrop-blur-lg  ">
      <h1 className="text-4xl">
        <Link to="/HomePage">
          Baka<span className="text-purple-950">Rate</span>
        </Link>
      </h1>
      <div>
        <h1 className="text-2xl">
          <Link to="/HomePage">Home</Link>
        </h1>
      </div>
      <h1 className="text-2xl">
        <a href="#">
          <Link to="/HomePage">Anime</Link>
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
        className="p-4 hover:text- hover:scale-110 transition-all duration-300 ease-in-out bg-transparent"
        onClick={() => {
          console.log("sort clicked", sort);
          setSort(sort == "asc" ? "desc" : "asc");
        }}
      >
       
        <ArrowDownUp className="hover:cursor-pointer" />
      </button>
      <h1 className="text-2xl">
        <Link to="/">Profile</Link>
      </h1>
    </div>
  );
}
