import { useEffect, useState } from "react";
import { CardProps } from "../types";
import Card from "./Card";

import Reject from ".//Reject";

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

  return (
    <div
      className={`flex flex-row justify-center items-center gap-8 text-white flex-wrap`}
    >
      {sortedAnimes.length == 0 && <Reject search={search} />}
      {sortedAnimes.map((anime) => (
        <Card item={anime} />
      ))}
    </div>
  );
}
