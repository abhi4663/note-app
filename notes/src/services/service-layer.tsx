import axios from "axios";

export class ServiceManager {
    getAllNotes = async (dispatch: any) => {
        await axios
            .get("http://localhost:7000/api/notes")
            .then(response => {
                console.log(response.data);
                dispatch({ type: "NOTES_LIST", noteList: response.data });
            })
            .catch(err => {
                console.log(err.message);
            });
    };
    getNoteById = async (dispatch: any, id: any) => {
        await axios
            .get(`http://localhost:7000/api/notes/${id}`)
            .then(response => {
                dispatch({ type: "NOTE_DETAILS", selectedNote: response.data });
            })
            .catch(err => {
                console.log(err.message);
            });
    };
    addNotes = async (dispatch: any, Note: any) => {
        let check = await axios.post(
            "http://localhost:7000/api/notes",
            Note,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        if (check.status === 200) {
            dispatch({ type: "ADD_NOTE", addNote: Note });
        }
    };
    editNote = async (dispatch: any, Note: any, id: any) => {
        let check = await axios.put(
            `http://localhost:7000/api/notes/${id}`,
            Note,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        if (check.status === 200) {
            // dispatch({ type: "EDIT_NOTE", editNote: Note  });
            this.getAllNotes(dispatch);

        };
    }
    deleteNote = async (dispatch: any, id: any) => {
        let check = await axios.delete(
            "http://localhost:7000/api/notes/" + id,

        );
        if (check.status === 200) {
            dispatch({ type: "DELETE_NOTE", deleteNote: id });
        }
    };
    searchTitle = async (dispatch: any, title: any) => {
        axios
            .get(`http://localhost:7000/api/notes/note/${title}`)
            .then(response => {
                dispatch({ type: "NOTES_LIST", noteList: response.data });
            })
            .catch(err => {
                console.log(err.message);
            });
    };
}