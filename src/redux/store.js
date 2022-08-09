import {configureStore} from '@reduxjs/toolkit'
import todo from './slices/todoSlice'
import toggleComplete from "./slices/todoSlice";
import deleteTodo from "./slices/todoSlice";

export const store = configureStore({
    reducer: {
        todo,
        toggleComplete,
        deleteTodo,
    }
})