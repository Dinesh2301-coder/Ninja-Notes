import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./CreateNote.css"
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
  let navigate = useNavigate()

  function AddNote(e) {
    e.preventDefault()
    const title = document.getElementsByClassName("textbox")[0].value;
    const desc = document.getElementsByClassName("desc")[0].value;

    const noteDetails = { title, desc }

    if (title && desc){
      navigate("/", {state:noteDetails})
    }else{
      alert("Please add Title and description first")
    }

  }

  return (
    <div>
      <Form>
        <h2>Create Note</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" className='textbox' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} className='desc' />
        </Form.Group>

        <Button onClick={AddNote}>Add Note</Button>
      </Form>
    </div>
  )
}
