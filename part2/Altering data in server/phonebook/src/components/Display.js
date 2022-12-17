import axios from "axios";
import React from "react";

const Display = ({ setPersons, persons, search }) => {
  const URL = "http://localhost:3001/persons";

  const deletePerson = (id) => {
    axios.delete(`${URL}/${id}`).then((response) => {
      console.log(response);
      setPersons(persons.filter((e) => e.id != id));
    });
  };

  return (
    <div>
      {persons
        .filter((e) => e.name.toUpperCase().includes(search.toUpperCase()))
        .map((e, i) => (
          <div key={i}>
            {e.id} {e.name} {e.number}{" "}
            <button
              onClick={() => {
                if (window.confirm(`Delete ${e.name}`)) {
                  deletePerson(e.id);
                }
              }}
            >
              delete
            </button>
          </div>
        ))}
    </div>
  );
};
export default Display;
