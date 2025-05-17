import vid from "../assets/SpookyTrees_1.mp4";
import { CardProps } from "../types";
import FeaturedNowCard from "./FeaturedNowCard";
interface FeaturedNowProps {
  animes: CardProps[];
}

export default function FeaturedNow({ animes }: FeaturedNowProps) {
  
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
      <FeaturedNowCard animes={animes} />
    </div>
  );
}
