import vid from "../assets/SpookyTrees_1.mp4";
import { CardProps } from "../types";
import Card from "./Card";
import img from "../assets/sololevelingimg.jpg";
interface FeaturedNowProps {
  animes: CardProps[]; // Expect an array of Anime objects
}

export default function FeaturedNow({ animes }: FeaturedNowProps) {
  //   const featuredAnime = animes.find((anime) => anime.title === "solo leveling");
  const featuredAnime = animes.find((anime) =>
    anime.title.toLowerCase().includes("solo leveling")
  );
  return (
    <div className="">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-2]"
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="flex flex-row justify-center items-center">
        <div className=" mt-35">
          <h1 className="text-2xl font-semibold  ml-2 mb-2">Featured Now</h1>

          <div className=" h-138 w-240 rounded-3xl flex flex-row justify-end  bg-violet-500/20  backdrop-blur-lg object-fit  mask-r-to-violet-500/60  ">
            <img src={img} className="rounded-3xl " alt="" />

            <div className="mr-10 mt-10 absolute bg-violet-500/20 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-3xl max-h-fit ">
              {featuredAnime ? (
                <Card
                  item={{
                    title: featuredAnime.title,
                    hasSub: featuredAnime.hasSub,
                    hasDub: featuredAnime.hasDub,
                    imgSrc: featuredAnime.imgSrc,
                    rate: featuredAnime.rate,
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
