import { Dispatch, SetStateAction } from "react";

export type CardProps = {
  title: string;
  hasSub?: boolean;
  hasDub?: boolean;
  imgSrc: string;
  rate: number;
};

export type SearchInput = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
};
