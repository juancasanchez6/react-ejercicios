import React, { useState } from "react";
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

  const [searchText, setSearchText] = useState('')

  const addNote = (text) => {
    //console.log(text)
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText}/>
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default Notes;
