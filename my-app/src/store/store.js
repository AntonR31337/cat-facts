import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catFactsData from './reducer';

const rootReducer = combineReducers({
    cats: catFactsData,
});

export const store = configureStore({
    reducer: rootReducer,
  });