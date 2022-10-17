import { createSlice } from "@reduxjs/toolkit";

const loggedInUsername = localStorage.getItem("username");

const INITIAL_STATE = [
    {messageId: '1',username: 'WelcomeBot',text: 'Welcome to Btrs messaging'}
];

const messageSlice = createSlice({
    name: 'messages',
    initialState: INITIAL_STATE,
    reducers: {
        addMessage(state, action) {
            state.push(action.payload);
        }
    }
});

export const allMessages = (state) => state.messages;

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;