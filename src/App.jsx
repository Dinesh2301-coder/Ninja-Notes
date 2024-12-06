import Navigationbar from "./Components/Navbar";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditNote from "./Components/EditNote";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import CreateNote from "./Components/CreateNote";

function App() {

  const [theme, setTheme] = useState("light")
  const [notes, setNotes] = useState([
    {
      title: "Welcome to Ninja Notes!",
      desc: "We are delighted to have you here. We will help you in managing all your tasks and notes.",
    },
  ])

  const deleteNote = (indexToDelete) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== indexToDelete));
  };

  const editNote = (updatedNote, indexToUpdate) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === indexToUpdate ? updatedNote : note))
    );
  };

  return (
    <div data-bs-theme={theme} className={`${theme} body`}>
      <Router>

        <Navigationbar theme={theme} setTheme={setTheme} />


        <Routes>
          <Route exact path="/" element={<Home notes = {notes} setNotes = {setNotes} deleteNote={deleteNote}/>} />
          <Route exact path="/add" element={<CreateNote />} />
          <Route
            exact
            path="/edit/:id"
            element={<EditNote notes={notes} editNote={editNote} />}
          />
        </Routes>


        <footer>All Rights Reserved | Copyright &copy; www.ninjanotes.com </footer>
      </Router>
    </div>
  )
}

export default App
