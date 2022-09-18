import React from "react";

const Form = ({ setNewName, newNumber, setNewNumber, persons, newName, setPersons }) => {
  const submit = (e) => {
    e.preventDefault();
    const contact = { name: newName, number: newNumber };
    function checkName() {
      if (JSON.stringify(persons.find((e) => e.name === contact.name)) !== undefined) {
        return true;
      } else {
        return false;
      }
    }
    function checkNumber() {
      if (JSON.stringify(persons.find((e) => e.number === contact.number)) !== undefined) {
        return true;
      } else {
        return false;
      }
    }

    if (checkName() || checkNumber()) {
      if (checkName() == true) {
        alert(`${contact.name} is already in the contact list`);
      } else {
        alert(`${contact.number} is already in the contact list`);
      }

      setNewName("");
      setNewNumber("");
    } else {
      setPersons(persons.concat(contact));
      setNewName("");
      setNewNumber("");
    }
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
