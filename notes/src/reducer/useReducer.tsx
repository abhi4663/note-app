export const Reducer = (state: any, action: any): any => {
  switch (action.type) {
    case "NOTES_LIST":
      return {
        ...state,
        notes: action.noteList,
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.addNote],
      };
    case "EDIT_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.editNote],
      };
    case "NOTE_DETAILS":
      return {
        ...state,
        selectedNote: action.selectedNote,
      };
    case 'DELETE_NOTE':

      return {
        ...state, notes: state.notes.filter((note: any) => note._id !== action.id)
      };
    case "NOTE_SEARCH":
      return {
        ...state,
        notes: action.noteList,
      };

  };
}
