import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const caracterLimit = 200;

  const handleChange = (e) => {
    //console.log(e.target.value);
    if (caracterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        cols="30"
        rows="6"
        placeholder="Escribe una nueva nota..."
        // maxLength={caracterLimit}
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{caracterLimit - noteText.length} carácteres resantes</small>
        <button className="save" onClick={handleSaveClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default AddNote;
