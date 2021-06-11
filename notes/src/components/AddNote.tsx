import React from 'react'
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { ServiceManager } from "../services/service-layer";
import { NoteContext } from "../reducer/useContext";


function AddNote() {
    const { dispatch } = useContext(NoteContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const history = useHistory();

    const service = new ServiceManager();

    function handleTitleChange(event: any) {
        setTitle(event.target.value);
    }
    function handleBodyChange(event: any) {
        setBody(event.target.value);
    }
    function handleSubmit() {
        // event.preventDefault();
        const note = {
            title: title,
            body: body,

        };
        service.addNotes(dispatch, note);

    }
    return (
        <div>
            <br />

            <h1>Add Notes</h1>

            <form >
                Title:<input type="text" onChange={handleTitleChange} /><br /><br />
                Body:<input type="text" onChange={handleBodyChange} /><br /><br />
                <button type="button" className="btn btn-success" onClick={() => { handleSubmit(); history.push("/") }}> Save</button>
            </form>
        </div>
    )
}

export default AddNote
