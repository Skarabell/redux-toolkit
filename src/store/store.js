import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/user.slice";
import todoSlice from "../features/todo/todoSlice";
import postSlice from "../features/post/postSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
        post: postSlice
    }
})