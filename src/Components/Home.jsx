import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Note from "./Note";
import { useNavigate, useLocation } from "react-router-dom";

export default function Home({notes, setNotes, deleteNote}) {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (location.state) {
      const newNote = location.state; // Access the passed note
      setNotes((prevNotes) => [...prevNotes, newNote]); // Update notes without infinite loop
    }
  }, [location.state]); // Run only when location.state changes

  return (
    <div>
      <div className="heading">
        <h2 className="title">Your Notes</h2>
        <Button onClick={() => {navigate("/add");}}>Add</Button>
      </div>

      <div className="notes">
        {notes.map((note, index) => (
          <Note key={index} title={note.title} desc={note.desc} deleteNote={deleteNote} id= {index}/>
        ))}
      </div>
    </div>
  );
}
