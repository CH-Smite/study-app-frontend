import React from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux.ts";
import {Note} from "../../types/note.ts";
import {Container, EmptyMsgBox} from "../../styles/styles.tsx";
import MainWrapper from "../../components/MainWrapper/MainWrapper.tsx";

const TagNotes = () => {
    const {name} = useParams() as string;

    const {mainNotes} = useAppSelector((state) => state.notesList);

    let notes: Note[] = [];
    mainNotes.forEach((note) => {
        if (note.tags.find(({tag}) => tag === name)) {
            notes.push(note);
        }
    })

    return (
        <Container>
            {notes.length === 0 ? (
                    <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
                ) :
                (
                    <MainWrapper notes={notes} type={name}/>
                )
            }
        </Container>
    );
};

export default TagNotes;