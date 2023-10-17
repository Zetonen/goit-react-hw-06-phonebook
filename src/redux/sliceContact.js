import { createSlice, nanoid } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: [
    { id: nanoid(), name: 'Андрій Томашевський', number: '+30893435355' },
    { id: nanoid(), name: 'Sigma', number: '+30893435355' },
    { id: nanoid(), name: 'Пітер', number: '459-12-56' },
  ],
  reducers: {
    add(state, action) {
      state.push({
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      });
    },
    remove(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { add, remove } = slice.actions;
export const sliceContact = slice.reducer;
export const getSliceContacts = state => state.contacts;
