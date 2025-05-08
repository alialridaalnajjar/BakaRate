import { Search } from "lucide-react";
import { SearchInput } from "../types";
import { useState } from "react";

export default function SearchBar({ setSearch, setShowFeatured }: SearchInput) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-row p-2 rounded-md bg-indigo-900">
      <input
        onChange={(e) => {
          setInput(e.target.value);
          setShowFeatured(false);
          setSearch(input);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") setSearch(input);
          console.log("search clicked");
          if (input.length === 0) {
            setShowFeatured(true);
          }
        }}
        value={input}
      />
      <button className="hover:cursor-pointer" onClick={() => setShowFeatured(false)}> <Search /> </button>
    </div>
  );
}
