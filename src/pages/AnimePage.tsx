import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { animes } from "../data/animes";
import Card from "../components/Card";
import { HeartPlus } from "lucide-react";
import { useState } from "react";

export default function AnimePage() {
  const { title } = useParams();
  const makeTitleFromUrl = (s: string) => s.toLowerCase().replace(/-/g, " ");
  const animeNameFromUrl = makeTitleFromUrl(title || "");
  const anime = animes.find(
    (anime) => anime.title.toLowerCase() === animeNameFromUrl
  );
  const [favorite, setFavorite] = useState(false);
  const handleFavoriteClick = () => setFavorite(!favorite);

  return (
    <div
      className="text-white min-h-screen  flex flex-col pt-10"
      style={{ backgroundImage: `url(${anime?.background})` }}
    >
      <div className="flex justify-center">
        <h1
          className="text-2xl md:text-3xl font-bold mb-6 px-6 py-3 bg-white/20 backdrop-blur-md border border-violet-300/30 rounded-2xl shadow-lg shadow-black/20 tracking-wide select-none transition-all duration-200 hover:scale-105"
          style={{
            fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
            letterSpacing: "0.12em",
          }}
        >
          {animeNameFromUrl.toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-8 px-2 md:px-8 flex-1">
        <div className="flex flex-col items-center gap-6 w-full max-w-xs">
          <Card
            item={{
              title: anime?.title || "Unknown",
              hasSub: anime?.hasSub || false,
              hasDub: anime?.hasDub || false,
              imgSrc: anime?.imgSrc || "",
              rate: anime?.rate || 0,
            }}
          />
          <div className="flex flex-row gap-3 w-full justify-center">
            <button className="hover:cursor-pointer bg-red-800 rounded-3xl px-4 py-2 text-sm md:text-base hover:scale-110 shadow-2xl shadow-black transition-all duration-200 font-semibold hover:bg-red-700 active:scale-95">
              Watch Now
            </button>
            <a href={anime?.trailer} target="_blank" rel="noopener noreferrer">
              <button className="hover:cursor-pointer bg-violet-700 rounded-3xl px-3 py-2 text-sm md:text-base hover:scale-110 shadow-2xl shadow-black transition-all duration-200 font-semibold hover:bg-violet-800 active:scale-95">
                Trailer
              </button>
            </a>
            <button
              className={`rounded-3xl flex items-center px-3 py-2 shadow-2xl shadow-black transition-all duration-200 cursor-pointer border-2 ${
                favorite
                  ? "bg-pink-600 border-pink-400 scale-110"
                  : "bg-white/80 border-violet-300"
              } hover:scale-110 active:scale-95 `}
              onClick={handleFavoriteClick}
              title={favorite ? "Remove from favorites" : "Add to favorites"}
            >
              <HeartPlus
                className={favorite ? "text-white" : "text-pink-600"}
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-2xl mb-6">
          <iframe
            src={anime?.frame}
            className="rounded-2xl w-full border-4 border-violet-700 shadow-lg"
            style={{ minHeight: "200px", height: "40vw", maxHeight: "350px" }}
            allowFullScreen
            title="Anime Video"
          ></iframe>
        </div>

        <div className="w-full max-w-xl font-light text-justify text-base md:text-lg">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-white drop-shadow">
            {animeNameFromUrl.toUpperCase()}
          </h2>
          <p className="shadow-2xl shadow-black rounded-2xl p-5 bg-black/60 min-h-fit hover:bg-violet-900/40 transition-colors duration-200">
            {anime?.description}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/HomePage"
          className="inline-flex items-center gap-2 mt-8 bg-white/20 backdrop-blur-md text-violet-700 font-bold rounded-full px-8 py-3 shadow-lg shadow-black/40 hover:scale-105 hover:bg-violet-800 transition-all duration-300 border-2 border-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          ⬅ Back to Home
        </Link>
      </div>
      <div className="mt-12 w-full">
        <Footer />
      </div>
    </div>
  );
}
