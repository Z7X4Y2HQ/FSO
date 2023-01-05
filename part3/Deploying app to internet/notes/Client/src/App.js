import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services";
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

    noteService.update(id, changeNote).then((returnedNote) => {
      setNotes(notes.map((e) => (e.id !== id ? e : returnedNote)));
    });
  };

  const hook = () => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  };

  useEffect(hook, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
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
