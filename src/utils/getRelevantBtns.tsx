import {NotesIconBox} from "../styles/styles.tsx";
import {RiInboxUnarchiveFill} from "react-icons/ri";
import {FaTrash} from "react-icons/fa";
import {Note} from "../types/note.ts";
import {Dispatch} from "@reduxjs/toolkit";
import {toggleCreateNoteModal} from "../store/modal/modalSlice.ts";
import {
    deleteNote,
    restoreNote,
    setArchiveNotes,
    setEditNote,
    setTrashNotes,
    unArchiveNote
} from "../store/notesList/notesListSlice.ts";

const getRelevantBtns = (type: string, note: Note, dispatch: Dispatch) => {

    const clickHandler = () => {
        dispatch(toggleCreateNoteModal(true));
        dispatch(setEditNote(note));
    }

    if (type === "archive") {
        return (
            <>
                <NotesIconBox
                    onClick={() => dispatch(unArchiveNote(note))}
                    data-info="Unarchive"
                >
                    <RiInboxUnarchiveFill style={{fontSize: '1rem'}}/>
                </NotesIconBox>
                <NotesIconBox
                    onClick={() => dispatch(setTrashNotes(note))}
                    data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    } else if (type === "trash") {
        return (
            <>
                <NotesIconBox
                    onClick={() => dispatch(restoreNote(note))}
                    data-info="Restore"
                >
                    <RiInboxUnarchiveFill style={{fontSize: '1rem'}}/>
                </NotesIconBox>
                <NotesIconBox
                    onClick={() => dispatch(deleteNote(note))}
                    data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    } else {
        return (
            <>
                <NotesIconBox
                    onClick={clickHandler}
                    data-info="Edit"
                >
                    <RiInboxUnarchiveFill style={{fontSize: '1rem'}}/>
                </NotesIconBox>
                <NotesIconBox
                    onClick={() => dispatch(setArchiveNotes(note))}
                    data-info="Archive"
                >
                    <RiInboxUnarchiveFill style={{fontSize: '1rem'}}/>
                </NotesIconBox>
                <NotesIconBox
                    onClick={() => dispatch(setTrashNotes(note))}
                    data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    }
}

export default getRelevantBtns;