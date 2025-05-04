import { useState } from "react";
import AnimeList from "../components/AnimeList";
import NavBar from "../components/NavBar";
import { animes } from "../data/animes";
export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc"); // "asc" or "desc"
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <NavBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
      <AnimeList search={search} animes={animes} sort={sort} />
    </div>
  );
}
