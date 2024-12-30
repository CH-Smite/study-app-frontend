import {configureStore} from "@reduxjs/toolkit";
import menuReducer from './menu/menuSlice.ts'
import modalReducer from './modal/modalSlice.ts'
import notesListReducer from './notesList/notesListSlice.ts'
import tagsReducer from './tags/tagsSlice.ts'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        modal: modalReducer,
        notesList: notesListReducer,
        tags: tagsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;