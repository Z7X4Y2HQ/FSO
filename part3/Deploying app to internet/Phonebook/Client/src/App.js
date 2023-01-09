import { useState, useEffect } from "react";
import Display from "./components/Display";
import Form from "./components/Form";
import Search from "./components/Search";
import getServices from "./services";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getServices.getAll().then((persons) => {
      setPersons(persons);
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
      <Display persons={persons} setPersons={setPersons} search={search} />
    </div>
  );
};

export default App;
