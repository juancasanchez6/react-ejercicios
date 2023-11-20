import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./componentes/NotesList";
import Search from "./componentes/Search";
import Header from "./componentes/Header";

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Esta es mi primera nota",
      date: "16/11/2023",
    },
    {
      id: nanoid(),
      text: "Esta es mi segunda nota",
      date: "17/11/2023",
    },
    {
      id: nanoid(),
      text: "Esta es mi tercera nota",
      date: "18/11/2023",
    },
    {
      id: nanoid(),
      text: "Esta es mi cuarta nota",
      date: "19/11/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	

  const addNote = (text) => {
    //console.log(text)
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(newNotes)
		);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(newNotes)
		);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default Notes;
