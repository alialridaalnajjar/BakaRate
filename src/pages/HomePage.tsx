import { useState } from "react";
import AnimeList from "../components/AnimeList";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { animes } from "../data/animes";
import FeaturedNow from "../components/FeaturedNow";
export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc"); 
  //show or unshow Featured based on search if on or off
 const [showFeatured, setShowFeatured] = useState(true); // true or false based on search
  return (
    <div className=" text-white min-h-screen">
      <NavBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        setShowFeatured={setShowFeatured}
      />

      <div className="h-full   ">
        {showFeatured === true ? <FeaturedNow animes={animes} /> : null}
        
      </div>
      <div className=" bg-neutral-950" id="#" >
         <AnimeList search={search} animes={animes} sort={sort}  />
      </div>
      <div className=" bottom-0   mt-0 text-white" >
        <Footer/>
      </div>
    </div>
  );
}
