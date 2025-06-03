import { CardProps } from "../types";
import Card from "./Card";

interface FeaturedNowProps {
  animes: CardProps[];
}

export default function FeaturedNowCard({ animes }: FeaturedNowProps) {
  const x = animes.filter(
    (anime) =>
       anime.title.toLowerCase() === "solo leveling" 
    
      //|| anime.title.toLowerCase() === "blue lock" ||
      // anime.title.toLowerCase() === "black clover"
  );

 
  return (
    <div className="flex flex-row justify-center items-center">
      {x.map((anime) => (
        <div className=" mt-30 mb-30">
          <h1 className="text-2xl font-semibold text-white   ml-2 mb-2">Featured Now</h1>

          <div className=" h-138 w-240 rounded-3xl flex flex-row justify-end  bg-violet-500/20  backdrop-blur-lg object-fit  mask-r-to-violet-500/60  ">
           
              <img src={anime?.ft} className="rounded-3xl " alt="" />
          

            <div className="mr-10 mt-10 absolute bg-violet-500/20 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-3xl max-h-fit ">
              <div>
                <Card
                  item={{
                    title: anime.title,
                    hasSub: anime.hasSub,
                    hasDub: anime.hasDub,
                    imgSrc: anime.imgSrc,
                    rate: anime.rate,
                  }}
                />
              </div>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
