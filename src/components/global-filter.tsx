import React from "react";

interface IGlobalFilter {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalFilter = ({ filter, setFilter }: IGlobalFilter) => {
  return (
    <div>
      <span>
        Search:{" "}
        <input
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
