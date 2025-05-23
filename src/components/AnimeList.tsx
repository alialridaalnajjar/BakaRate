import { useEffect, useState } from "react";
import { CardProps } from "../types";
import Card from "./Card";
import img from "../assets/403b8268939393bbd01dfc13e348e645.jpg";
import Reject from "./Reject";

export default function AnimeList({
  animes,
  search,
  sort,
}: {
  animes: CardProps[];
  search: string;
  sort: string;
}) {
  const [sortedAnimes, setSortedAnimes] = useState<CardProps[]>([]);

  useEffect(() => {
    const filteredAnimes = animes.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setSortedAnimes(
      filteredAnimes.sort((a, b) => {
        if (sort === "asc") {
          return a.rate - b.rate;
        } else {
          return b.rate - a.rate;
        }
      })
    );
  }, [sort, search]);

  if (sortedAnimes.length === 0) {
    return (
      <div
        className="flex flex-col justify-center items-center min-h-[60vh] w-full text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <Reject search={search} />
      </div>
    );
  }

  return (
    <div
      className="flex flex-row justify-center items-center gap-8 text-white flex-wrap"
      style={{ backgroundImage: `url(${img})` }}
    >
      {sortedAnimes.map((anime) => (
        <Card key={anime.title} item={anime} />
      ))}
    </div>
  );
}
