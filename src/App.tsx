import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AnimeList from "./components/AnimeList";
import NavBar from "./components/NavBar";
import { animes } from "./data/animes";

function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc"); // "asc" or "desc"
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

export default App;
