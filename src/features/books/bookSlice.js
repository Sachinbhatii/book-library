import { createSlice, nanoid } from '@reduxjs/toolkit';
import booksData from '../../data/booksData.json';

const initialState = {
    list: booksData,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: {
            reducer(state, action) {
                state.list.unshift(action.payload);
            },
            prepare({ title, author, desc, read }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        author,
                        desc,
                        read: !!read,
                        createdAt: new Date().toISOString(),
                    },
                };
            },
        },
        updateBook(state, action) {
            const { id, changes } = action.payload;
            const book = state.list.find(b => b.id === id);
            if (book) Object.assign(book, changes);
        },
        removeBook(state, action) {
            state.list = state.list.filter(b => b.id !== action.payload);
        },
        toggleRead(state, action) {
            const book = state.list.find(b => b.id === action.payload);
            if (book) book.read = !book.read;
        },
    },
});

export const { addBook, updateBook, removeBook, toggleRead } = booksSlice.actions;
export default booksSlice.reducer;
