import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./CreateNote.css"

export default function EditNote({ notes, editNote }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        // Populate form with existing note data
        const noteToEdit = notes[id];
        if (noteToEdit) {
            setTitle(noteToEdit.title);
            setDesc(noteToEdit.desc);
        }
    }, [id, notes]);

    const handleSave = () => {
        if (title && desc) {
            // Save the updated note
            editNote({ title, desc }, parseInt(id));
            navigate("/"); // Navigate back to the Home page
        } else {
            alert("Please fill in both title and description!");
        }
    };

    return (
        <div>

            <Form>
                <h2>Edit Note</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" className='textbox' value={title} onChange={(e) => setTitle(e.target.value) }/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} className='desc' value={desc} onChange={(e) => setDesc(e.target.value)} />
                </Form.Group>

                <Button onClick={handleSave}>Save Changes</Button>
            </Form>

        </div>

    );
}
