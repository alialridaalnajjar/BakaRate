import { useState } from "react";
import AnimeList from "../components/AnimeList";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { animes } from "../data/animes";
import FeaturedNow from "../components/FeaturedNow";
export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc"); // "asc" or "desc"
  return (
    <div className=" text-white min-h-screen">
      <NavBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <div className="h-screen ">
        <FeaturedNow animes={animes} />
      </div>
      <div className=" bg-neutral-950" id="#">
        <AnimeList search={search} animes={animes} sort={sort} />
      </div>
      <div className=" bottom-0">
        <Footer />
      </div>
    </div>
  );
}
