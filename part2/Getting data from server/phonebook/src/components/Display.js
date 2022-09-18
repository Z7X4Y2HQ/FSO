import React from "react";

const Display = ({ persons, search }) => {
  return (
    <div>
      {persons
        .filter((e) => e.name.toUpperCase().includes(search.toUpperCase()))
        .map((e) => (
          <div key={e.name}>
            {e.name} {e.number}
          </div>
        ))}
    </div>
  );
};
export default Display;
