import React from "react";
import { MdDeleteForever } from "react-icons/md";

const NoteFile = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note-file">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default NoteFile;
