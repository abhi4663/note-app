import React from 'react'
import { useState, useContext, useEffect, } from "react";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { ServiceManager } from "../services/service-layer";
import { NoteContext } from "../reducer/useContext";


function EditNote() {
    const { id }: any = useParams();
    // console.log(id);
    const { state, dispatch } = useContext(NoteContext);
    // console.log(state);
    // console.log(state.selectedNote.title);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const history = useHistory();
    const service = new ServiceManager();

    useEffect(() => {
        service.getNoteById(dispatch, id);
    }, []);

    useEffect(() => {
        setTitle(state.selectedNote.title);
        setBody(state.selectedNote.body);
    }, [state.selectedNote]);

    function handleTitleChange(event: any) {

        setTitle(event.target.value);
    }
    function handleBodyChange(event: any) {
        setBody(event.target.value);
    }
    function handleSubmit() {
        const note = {
            title: title,
            body: body,
        };
        service.editNote(dispatch, note, id);

    }
    // console.log(state);
    console.log(state.selectedNote);


    function handleDelete() {
        service.deleteNote(dispatch, id);
    }
    return (
        <div>
            <br />

            <h1>Update Notes</h1>

            <form >
                Title:   <input type="text" onChange={handleTitleChange} value={title} /><br /><br />
                Body:<input type="text" onChange={handleBodyChange} value={body} /><br /><br />
                <button type="button" className="btn btn-success" onClick={() => { handleSubmit(); history.push("/") }}> Save</button>
                <button type="button" className="btn btn-danger" onClick={() => { handleDelete(); history.push("/addNotes") }}>Delete</button>
            </form>
        </div>
    )
}

export default EditNote
