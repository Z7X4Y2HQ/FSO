import axios from "axios";
import getServices from "../services";

const Form = ({ setNewName, newNumber, setNewNumber, persons, newName, setPersons }) => {
  const submit = (e) => {
    e.preventDefault();

    const contact = { name: newName, number: newNumber };

    function isExistingName() {
      return JSON.stringify(persons.find((e) => e.name === contact.name)) !== undefined;
    }
    function isExistingNumber() {
      return JSON.stringify(persons.find((e) => e.number === contact.number)) !== undefined;
    }
    function getNotes() {
      getServices.getAll().then((persons) => {
        setPersons(persons);
      });
    }

    if (isExistingName() && isExistingNumber()) {
      alert(`${contact.name} is already in the contact list`);
    } else if (isExistingName()) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one ?`
        )
      ) {
        const newNumberPerson = persons.find((e) => e.name === newName);
        const URL = `http://localhost:3001/persons/${newNumberPerson.id}`;
        const newContactNumber = { ...newNumberPerson, number: newNumber };
        axios.put(URL, newContactNumber).then((response) => {
          getNotes();
        });
      }
    } else {
      getServices.create(contact).then(() => {
        getNotes();
      });
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={submit}>
      <div>
        name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
