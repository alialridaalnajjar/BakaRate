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
      className="text-white min-h-screen bg-black pt-2 flex flex-col"
      style={{ backgroundImage: `url(${anime?.background})` }}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-4 p-4 md:p-6 text-black bg-white/40 rounded-xl w-fit mx-auto">
        {animeNameFromUrl.toUpperCase()}
      </h1>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-8 px-2 md:px-8 flex-1">
        {/* Card and Actions */}
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
            <button className="bg-red-800 rounded-3xl px-4 py-2 text-sm md:text-base hover:scale-105 shadow-2xl shadow-black transition">
              Watch Now
            </button>
            <a href={anime?.trailer}>
              <button className="bg-red-800 rounded-3xl px-3 py-2 text-sm md:text-base hover:scale-105 shadow-2xl shadow-black transition">
                Trailer
              </button>
            </a>
            <div
              className="bg-red-800 rounded-3xl flex items-center px-3 py-2 hover:scale-105 shadow-2xl shadow-black transition cursor-pointer"
              onClick={handleFavoriteClick}
              title={favorite ? "Remove from favorites" : "Add to favorites"}
            >
              <HeartPlus className={favorite ? "text-white" : "text-black"} />
            </div>
          </div>
        </div>
        {/* Video */}
        <div className="flex flex-col items-center w-full max-w-2xl mb-6">
          <iframe
            src={anime?.frame}
            className="rounded-2xl w-full"
            style={{ minHeight: "200px", height: "40vw", maxHeight: "350px" }}
            allowFullScreen
            title="Anime Video"
          ></iframe>
        </div>
        {/* Description */}
        <div className="w-full max-w-xl font-light text-justify text-base md:text-lg">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-white">
            {animeNameFromUrl.toUpperCase()}
          </h2>
          <p className="shadow-2xl shadow-black rounded-2xl p-5 bg-black/60 min-h-fit">
            {anime?.description}
          </p>
        </div>
      </div>
      <Link
        to="/HomePage"
        className="inline-block mt-8 text-black bg-white/70 hover:underline rounded-2xl p-2 font-semibold scale-105 hover:scale-110 transition-transform duration-300 mx-auto"
      >
        Back to Home
      </Link>
      <div className="mt-12 w-full">
        <Footer />
      </div>
    </div>
  );
}
