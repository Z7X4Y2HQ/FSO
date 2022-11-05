import { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important === true);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((e) => e.id === id);
    const changeNote = { ...note, important: !note.important };

    axios.put(url, changeNote).then((response) => {
      setNotes(notes.map((e) => (e.id !== id ? e : response.data)));
    });
  };

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("Promise Fulfilled");
      setNotes(response.data);
    });
  };

  useEffect(hook, []);

  console.log("Render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      setNotes(notes.concat(noteObject));
      setNewNote("");
      console.log(response);
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note, i) => (
          <Note key={i} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        ))}
        <div>
          <li style={{ listStyleType: "none" }}>
            <form onSubmit={addNote}>
              <br />
              <input value={newNote} onChange={handleNoteChange} />
              <button type="submit">Save</button>
            </form>
            <div>
              <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? "important" : "all"}
              </button>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default App;
