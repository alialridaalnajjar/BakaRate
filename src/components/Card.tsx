// components/Card.js
import { CardProps } from "../types";
import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";
import { Link } from "react-router-dom";

export default function Card({ item }: { item: CardProps }) {
  const { title, hasSub, hasDub, imgSrc, rate } = item;

  const stars = [];

  for (let i = 0; i < Math.trunc(rate); i++) {
    stars.push(
      <Star key={`full-${i}`} className="fill-amber-300" strokeWidth={0} />
    );
  }
  for (let i = Math.trunc(rate); i < rate; i++) {
    stars.push(
      <StarHalf key={`half-${i}`} className="fill-amber-300" strokeWidth={0} />
    );
  }
  for (let i = rate; i < 5; i++) {
    if (stars.length < 5)
      stars.push(<Star key={`empty-${i}`} className="" strokeWidth={0} />);
  }

  const makeUrlFriendly = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  const urlFriendlyTitle = makeUrlFriendly(title);
  const linkTo = `/AnimePage/${urlFriendlyTitle}`;

  return (
    <Link to={linkTo}>
      <div className="w-56 p-4 rounded-lg hover:scale-105 transition-all duration-200 ease-in-out bg-transparent hover:cursor-pointer ">
        <img
          src={imgSrc}
          className="w-full h-72 object-cover rounded-2xl "
          alt={title}
        />
        <h2 className="text-lg font-bold truncate">{title}</h2>
        <SubDub hasDub={Boolean(hasDub)} hasSub={Boolean(hasSub)} />
        <div className="flex flex-row justify-between mr-14">
          <div className="flex flex-row">{stars}</div>
          <div>{rate}</div>
        </div>
      </div>
    </Link>
  );
}

function SubDub({ hasSub, hasDub }: { hasSub: boolean; hasDub: boolean }) {
  return (
    <p>
      {hasSub && hasDub ? "Sub | Dub" : hasSub ? "Sub" : hasDub ? "Dub" : ""}
    </p>
  );
}
