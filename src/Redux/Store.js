import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MovieSlices";
const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
