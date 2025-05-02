import { CardProps } from "..//types";
import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";
export default function Card({ item }: { item: CardProps }) {
  const { title, hasSub, hasDub, imgSrc, rate } = item;

  const stars = [];

  for (let i = 0; i < Math.trunc(rate); i++) {
    stars.push(<Star className="fill-amber-300" strokeWidth={0} />);
  }
  for (let i = Math.trunc(rate); i < rate; i++) {
    //fill half the star
    stars.push(<StarHalf className="fill-amber-300" strokeWidth={0} />);
  }
  for (let i = rate; i < 5; i++) {
    if (stars.length < 5) stars.push(<Star className="" strokeWidth={0} />);
  }

  return (
    <div className="w-56 p-4 rounded-lg">
      <img src={imgSrc} className="w-full h-72 object-cover" />
      <h2 className="text-lg font-bold truncate">{title}</h2>
      <SubDub hasDub={Boolean(hasDub)} hasSub={Boolean(hasSub)} />

      <div className="flex flex-row justify-between mr-14">
        <div className="flex flex-row">{stars}</div>
        <div>{rate}</div>
      </div>
    </div>
  );
}

function SubDub({ hasSub, hasDub }: { hasSub: boolean; hasDub: boolean }) {
  return (
    <p>
      {hasSub && hasDub ? "Sub | Dub" : hasSub ? "Sub" : hasDub ? "Dub" : ""}
    </p>
  );
}
