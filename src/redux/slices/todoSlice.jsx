import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        saveTodo(state, action) {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }
            state.push(newTodo);
        },
        toggleComplete(state, action) {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo(state, action) {
            return state.filter((todo) => todo.id !== action.payload.id)
        }
    },
    // extraReducers: {
    //     [.pending]: (state) => {
    //         state.status = 'loading';
    //         state.items = [];
    //     },
    //     [.fulfilled]: (state, action) => {
    //         state.items = action.payload;
    //         state.status = 'success';
    //     },
    //     [.rejected]: (state) => {
    //         state.status = 'error';
    //         state.items = [];
    //     },
    // }
})

export const {saveTodo, toggleComplete, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;