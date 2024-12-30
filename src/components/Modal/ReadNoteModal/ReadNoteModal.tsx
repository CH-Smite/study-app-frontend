import React from 'react';
import {Note} from "../../../types/note.ts";
import {useAppDispatch} from "../../../hooks/redux.ts";
import {DeleteBox, FixedContainer} from "../Modal.styles.ts";
import {readNote} from "../../../store/notesList/notesListSlice.ts";
import {FaTimes} from "react-icons/fa";
import {Box} from "./ReadNoteModal.styles.ts";
import parse from "html-react-parser";

interface ReadNoteModalProps {
    note: Note;
    type: string;
}

const ReadNoteModal = ({note, type}: ReadNoteModalProps) => {
    const dispatch = useAppDispatch();
    return (
        <FixedContainer>
            <Box style={{backgroundColor: note.color}}>
                <DeleteBox
                    onClick={() => dispatch(readNote({type, id: note.id}))}
                    className="readNote__close-btn"
                >
                    <FaTimes/>
                </DeleteBox>
                <div className='readNote__title'>{note.title}</div>
                <div className='readNote__content'>{parse(note.content)}</div>
            </Box>
        </FixedContainer>
    );
};

export default ReadNoteModal;