import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { animes } from "../data/animes"; // Ensure your anime data includes a 'description' field
import Card from "../components/Card";
import { HeartPlus } from "lucide-react";
import { useState } from "react";
export default function AnimePage() {
  const { title } = useParams(); // Get the 'titll' parameter from the URLLLLLLL
  // Function to make the title URL-friendly (for matching with data if needed)
  const makeTitleFromUrl = (s: string) => {
    return s.toLowerCase().replace(/-/g, " ");
  };

  const animeNameFromUrl = makeTitleFromUrl(title || "");

  const anime = animes.find(
    (anime) => anime.title.toLowerCase() === animeNameFromUrl
  );

  const [favorite, setFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };
  return (
    <div
      className=" text-white min-h-screen bg-black pt-2"
      style={{ backgroundImage: `url(${anime?.background})` }}
    >
      <h1 className="text-4xl font-bold mb-4 p-6 pr-2 pb-2 text-black ">
        {animeNameFromUrl.toUpperCase()}
      </h1>
      <div className="  flex flex-row justify-around items-center">
        <div>
          <Card
            item={{
              title: anime?.title || "Unknown",
              hasSub: anime?.hasSub || false,
              hasDub: anime?.hasDub || false,
              imgSrc: anime?.imgSrc || "",
              rate: anime?.rate || 0,
            }}
          />

          <div className="flex flex-row gap-4 mt-4 ">
            <button className="bg-red-800 rounded-3xl p-0.5 w-30 hover:cursor-pointer hover:scale-103 shadow-2xl shadow-black">
              Watch Now
            </button>
            <a href={anime?.trailer}>
              <button className="bg-red-800 rounded-3xl p-0.5 w-20 hover:cursor-pointer  hover:scale-103 shadow-2xl shadow-black ">
                {" "}
                Trailer{" "}
              </button>
            </a>

            <div
              className="bg-red-800 rounded-4xl flex flex-row p-0.5 hover:cursor-pointer hover:scale-103 shadow-2xl shadow-black"
              onClick={handleFavoriteClick}
            >
              {favorite ? (
                <HeartPlus className="hover:cursor-pointer hover:scale-105" />
              ) : (
                <HeartPlus className="hover:cursor-pointer hover:scale-105 text-black" />
              )}
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center mb-10">
          <iframe
            src={anime?.frame}
            className="rounded-2xl"
            style={{ width: "600px", height: "350px" }}
          ></iframe>
        </div>
        <div className="  w-100 font-semilight text-justify text-lg   ">
          <h1 className="text-3xl font-bold mb-4  ">
            {animeNameFromUrl.toUpperCase()}
          </h1>
          <p className=" shadow-2xl shadow-black rounded-2xl p-5">
            {anime?.description}
          </p>{" "}
        </div>
      </div>
      {/*<section className="flex flex-row justify-center items-center gap-4  bg-red-700 mt-20">
            <div className="w-30 h-30">2</div>
            <div className="w-30 h-30">2</div>
            <div className="w-30 h-30">2</div></section>*/}

      <Link
        to="/HomePage"
        className="inline-block mt-8 text-black hover:underline m-10 rounded-2xl p-2 font-semibold scale-105 hover:scale-110 transition-transform duration-300"
      >
        Back to Home
      </Link>

      <div>Watch more ----</div>
      <div className="   gap-4  w-full h-full mt-12">
        <Footer />
      </div>
    </div>
  );
}
