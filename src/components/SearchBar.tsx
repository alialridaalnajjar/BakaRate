import { Search } from "lucide-react";
import { SearchInput } from "../types";
import { useState } from "react";

export default function SearchBar({ setSearch }: SearchInput) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-row p-2 rounded-md bg-indigo-900">
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") setSearch(input);
        }}
        value={input}
      />
      <Search />
    </div>
  );
}
