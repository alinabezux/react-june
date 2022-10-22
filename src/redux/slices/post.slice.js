import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";


const initialState = {
    posts: [],
    loading: false,
    error: null,
    currentPost: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getCurrentPost = createAsyncThunk(
    'postSlice/getCurrentPost',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.posts = action.payload
        // },
        deleteById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1)
        }
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getCurrentPost.fulfilled, (state, action) => {
                state.currentPost = action.payload
            })
});

const {reducer: postReducer, actions: {deleteById}} = postSlice;

const postActions = {
    getAll,
    deleteById,
    getCurrentPost
}

export {postReducer, postActions}