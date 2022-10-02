import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ethioDramas, ethioMovies, ethioShows } from "../AmahricMovie/FakeData";
const initialState = {
  movie: [],
  movieOrSerisById: {},
  searchTearm: "Harry",
  ethioMovies,
  ethioDramas,
  ethioShows,
  amMovieOrShowOrDrama: {}
};

const fetchMovieAsyncThunk = createAsyncThunk(
  "movie/fetchMovieAsyncThunk",
  async ({ type = "movie", term }) => {
    try {
      const resounse = await axios.get(
        `http://www.omdbapi.com/?s=${term}&apikey=d2720bf3&type=${type}`
      );
      if (resounse.data["Response"]) return resounse.data["Search"];
      return false;
      //
    } catch (error) {
      return [];
    }
  }
);

const fetchMovieByID = createAsyncThunk(
  "movieOrSerisById/fetchMovieAsyncThunk",
  async (id) => {
    try {
      const resounse = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=d2720bf3`
      );
      return resounse.data;
    } catch (error) {
      return [];
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getBooks: (state, action) => {
      state.movie = action.payload;
    },
    SearchTerm: (state, action) => {
      state.searchTearm = action.payload;
    },
    RemoveMovieById: (state) => {
      state.movieOrSerisById = {};
    },
    FindMovieById: (state, action) => {
      state.ethioMovies.forEach(movie => {
        if (movie.id === +action.payload) {
          state.movieOrSerisById = movie;
          return;
        }
      })
    }

 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieAsyncThunk.fulfilled, (state, { payload }) => {
        state.movie = payload;
      })
      .addCase(fetchMovieByID.fulfilled, (state, { payload }) => {
        state.movieOrSerisById = payload;
      });
  },
});
const getEthioMovies = (state) => state.movie.ethioMovies;
const getEthioDramas = (state) => state.movie.ethioDramas;
const getEthioShows = (state) => state.movie.ethioShows;
const getState = (state) => state.movie.movie;
const getSearchTerm = (state) => state.movie.searchTearm;
const getMovieById = (state) => state.movie.movieOrSerisById;
export const { getBooks, SearchTerm, RemoveMovieById, FindMovieById } =
  movieSlice.actions;
export {
  getState,
  fetchMovieAsyncThunk,
  getMovieById,
  fetchMovieByID,
  getSearchTerm,
  getEthioMovies,
  getEthioDramas,
  getEthioShows,
  
};
export default movieSlice.reducer;
