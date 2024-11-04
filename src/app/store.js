import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../state/task.slice";

const store = configureStore({
    reducer: {
        tasks:tasksReducer,
    },

});

export default store;