import { Dispatch, SetStateAction } from "react";

export type CardProps = {
  title: string;
  hasSub?: boolean;
  hasDub?: boolean;
  imgSrc: string;
  rate: number;
  poster?: string;
  description?: string;
  background?: string;
  trailer?: string;
  frame?: string;
  ft?: string;
};

export type SearchInput = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  setShowFeatured: Dispatch<SetStateAction<boolean>>;
  userName?: string;
};
export type ShowFeatured = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};
