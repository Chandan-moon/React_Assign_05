

import { configureStore } from '@reduxjs/toolkit';

import libraryReducer from "./bookSlice.js"


export const store = configureStore({

  reducer: {
  
    library : libraryReducer,

  }


});