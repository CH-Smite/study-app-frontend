import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux.ts";
import {toggleTagsModal} from "../../../store/modal/modalSlice.ts";
import {FaMinus, FaPlus, FaTimes} from "react-icons/fa";
import {Box, StyledInput, TagsBox} from "./TagModal.styles.ts";
import getStandardName from "../../../utils/getStandardName.ts";
import {DeleteBox, FixedContainer} from "../Modal.styles.ts";
import {v4} from "uuid";
import {addTags, deleteTags} from "../../../store/tags/tagsSlice.ts";
import {removeTags} from "../../../store/notesList/notesListSlice.ts";
import {Tag} from "../../../types/tag.ts";

interface TagModalProps {
    type: string;
    addedTags?: Tag[];
    handleTags?: (tag: string, type: string) => void;
}

const TagsModal = ({type, addedTags, handleTags}: TagModalProps) => {
    const dispatch = useAppDispatch();
    const {tagsList} = useAppSelector((state) => state.tags);
    const [inputText, setInputText] = useState('');

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputText) {
            return;
        }
        dispatch(addTags({tag: inputText.toLocaleLowerCase(), id: v4()}));
        setInputText('');
    }

    const deleteTagsHandler = (tag: string, id: string) => {
        dispatch(deleteTags(id));
        dispatch(removeTags({tag}));
    }
    return (
        <FixedContainer>
            <Box>
                <div className='editTags__header'>
                    <div className='editTags__title'>
                        {type === "add" ? "ADD" : "Edit"} Tags
                    </div>
                    <DeleteBox
                        className='editTags__close'
                        onClick={() => dispatch(toggleTagsModal({type, view: false}))}
                    >
                        <FaTimes/>
                    </DeleteBox>
                </div>

                <form onSubmit={submitHandler}>
                    <StyledInput
                        type="text"
                        value={inputText}
                        placeholder="new tag..."
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </form>
                <TagsBox>
                    {tagsList.map(({tag, id}) => (
                        <li key={id}>
                            <div className='editTags__tag'>
                                {getStandardName(tag)}
                            </div>
                            {type === "edit" ? (
                                <DeleteBox onClick={() => deleteTagsHandler(tag, id)}>
                                    <FaTimes/>
                                </DeleteBox>
                            ) : (
                                <DeleteBox>
                                    {addedTags?.find(
                                        (addedTags: Tag) => addedTags.tag === tag.toLowerCase()
                                    ) ? (
                                        <FaMinus onClick={() => handleTags!(tag, "remove")}/>
                                    ) : (
                                        <FaPlus onClick={() => handleTags!(tag, "add")}/>
                                    )
                                    }
                                </DeleteBox>
                            )}
                        </li>
                    ))}
                </TagsBox>
            </Box>
        </FixedContainer>
    );
};

export default TagsModal;