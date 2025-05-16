import { useState } from "react";
import AnimeList from "../components/AnimeList";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { animes } from "../data/animes";
import FeaturedNow from "../components/FeaturedNow";
export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");

  const [showFeatured, setShowFeatured] = useState(true);
  return (
    <div className=" text-white min-h-screen flex flex-col bg-black">
      <NavBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        setShowFeatured={setShowFeatured}
      />

      <div className="flex-1   ">
        {showFeatured === true ? <FeaturedNow animes={animes} /> : null}
      
      <div className=" bg-neutral-950" id="#">
        <AnimeList search={search} animes={animes} sort={sort} />
      </div></div>

      <Footer />
    </div>
  );
}
