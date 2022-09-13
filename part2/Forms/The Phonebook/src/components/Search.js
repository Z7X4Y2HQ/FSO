import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      filter shown with <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};
export default Search;
