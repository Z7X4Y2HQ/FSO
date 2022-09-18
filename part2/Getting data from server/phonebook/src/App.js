import { useState, useEffect } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import Search from "./components/Search";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Search setSearch={setSearch} search={search} />
      <h2>Add a new</h2>
      <Form
        persons={persons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Display persons={persons} search={search} />
    </div>
  );
};

export default App;
