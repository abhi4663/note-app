import React, { useReducer } from "react";
import { Reducer } from "./useReducer";

const initialState = {
    notes: [],
    selectedNote: {}
}


export const NoteContext = React.createContext<any>({});

export const NoteProvider = (props: any) => {
    const [state, dispatch] = useReducer(Reducer, initialState, () => {
        return initialState;


    });
    console.log(state);

    return (
        <NoteContext.Provider value={{ state, dispatch }}>
            {props.children}
        </NoteContext.Provider>
    );
};
