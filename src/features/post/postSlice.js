import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    posts: [],
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(res.data))
    }
)

export const removePostById = createAsyncThunk(
    'posts/removePostById',
    async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(removePost(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => { console.log('fulfield') },
        [getPosts.pending]: () => { console.log('pend') },
        [getPosts.rejected]: () => { console.log('error') },
        [removePostById.fulfilled]: () => { console.log('fulfield removePostById') },
        [removePostById.pending]: () => { console.log('pend removePostById') },
        [removePostById.rejected]: () => { console.log('remove error') }
    }
})

export const { setPosts, removePost } = postSlice.actions
export default postSlice.reducer