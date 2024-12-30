import React from 'react';
import {NotesContainer} from "../../styles/styles.tsx";
import NoteCard from "../Modal/NoteCard/NoteCard.tsx";
import {Note} from "../../types/note.ts";

interface MainWrapperProps {
    notes: Note[];
    type: string;
}

const MainWrapper = ({notes, type}: MainWrapperProps) => {
    return (
        <NotesContainer>
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} type={type}/>
            ))}
        </NotesContainer>
    );
};

export default MainWrapper;