import { SearchInput } from "../types";
import SearchBar from "./SearchBar";
import { ArrowDownUp } from "lucide-react";
import { Link } from "react-router";
export default function NavBar({
  search,
  setSearch,
  sort,
  setSort,
}: SearchInput) {
  return (
    <div className="sticky top-0 flex flex-row justify-around items-center h-20 w-full bg-violet-500/20 bg-clip-padding backdrop-filter backdrop-blur-lg  ">
      <h1 className="text-4xl">
        <a href="#">
          Baka<span className="text-purple-950">Rate</span>
        </a>
      </h1>
      <div>
        <h1 className="text-2xl">
          <Link to="/">Home</Link>
        </h1>
      </div>
      <h1 className="text-2xl">
        <a href="#">Anime</a>
      </h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setSort={setSort}
        sort={sort}
      />
      <button
        className="p-4 hover:text- hover:scale-110 transition-all duration-300 ease-in-out bg-transparent"
        onClick={() => {
          console.log("sort clicked", sort);
          setSort(sort == "asc" ? "desc" : "asc");
        }}
      >
        <ArrowDownUp />
      </button>
      <h1 className="text-2xl">
        <Link to="/LoginPage">Login</Link>
      </h1>
    </div>
  );
}
