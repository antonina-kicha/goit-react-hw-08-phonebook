import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact, update } from './operations';

const fetchPending = (state) => {
    state.isLoading = true;
};
const fetchRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
  
 const contactsSlice = createSlice({
    name: 'contact',
    initialState: { items: [], isLoading: false, error: null },
    extraReducers: {
        [fetchContacts.pending]: fetchPending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: fetchRejected,
        [addContact.pending]: fetchPending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: fetchRejected,
        [deleteContact.pending]: fetchPending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        [deleteContact.rejected]: fetchRejected,
        [update.pending]: fetchPending,
        [update.rejected]: fetchRejected,
        [update.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            console.log(action.payload.id);
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1, action.payload);
        }

    }
})


export const contactsReducer = contactsSlice.reducer;
