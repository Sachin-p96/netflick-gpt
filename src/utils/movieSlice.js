import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies : null,
        trailerKey : ''
    },
    reducers:{
        addNowPlayingMovies : (state,action) => {
           state.nowPlayingMovies = action.payload
        },
        addtrailerKey : (state,action) => {
            state.trailerKey = action.payload
        }
    }
})
export const {addNowPlayingMovies,addtrailerKey} = movieSlice.actions
export default movieSlice.reducer