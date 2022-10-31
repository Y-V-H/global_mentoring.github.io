import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmCards } from '../../assets/mock-data/film-cards';

const initialState = {
    filmsData: filmCards,
    currentFilm: ''
};

const fetchDataFromMovieAPI = async (sortByValue?:string) => {
    const url = `${process.env.filmAPI}?sortOrder=asc${sortByValue ? `&sortBy=${sortByValue}` : ''}`;
    const response = await (await fetch(url)).json();

    return response.data;
}

export const sortByMoviesFetch = createAsyncThunk(
    "todos/sortByMoviesFetch", 
    async (sortByValue?:string) => {
        const response = await fetchDataFromMovieAPI(sortByValue);

        return response;
    }
)

export const getMoviesFetch = createAsyncThunk(
    "todos/getMoviesFetch", 
    async () => {
        const response = await fetchDataFromMovieAPI();

        return response;
    }
)

const sortBySlice = createSlice({
    name: 'todos/sortBy',
    initialState,
    reducers: {
        updateCurrentFilmData(state, action) {
            state.currentFilm = action.payload
        },
        deleteFilmFromState(state, action) {
            state.filmsData = action.payload
        },
        addNewFilmToState(state, action) {
            state.filmsData = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(sortByMoviesFetch.fulfilled, (state, action) => {
                state.filmsData = action.payload
            })
            .addCase(getMoviesFetch.fulfilled, (state, action) => {
                state.filmsData = action.payload
            });
    }
})

export default sortBySlice.reducer;
export const { updateCurrentFilmData, deleteFilmFromState, addNewFilmToState} = sortBySlice.actions;
