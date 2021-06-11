import { NoteContext } from "../reducer/useContext";
import { useContext, useEffect } from "react";
import { ServiceManager } from "../services/service-layer";
import { Link } from "react-router-dom";
import './style.css';
const service = new ServiceManager();


function Notes(props: any) {
    const { state, dispatch } = useContext(NoteContext);
    useEffect(() => {
        service.getAllNotes(dispatch);
    }, [])
    const note = state.notes.map((note: any, index: any) => {
        return (
            <>
                <div className="notes">
                    <Link to={`${note._id}`}>  <h1>{note.title}</h1></Link>
                </div>
                <br />
            </>
        )
    })
    return (
        <div >
            {note}
        </div>
    )
}

export default Notes;
