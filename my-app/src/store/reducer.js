import { createSlice } from '@reduxjs/toolkit'

export const catFactsData = createSlice({
  name: 'CAT_FACTS',
  initialState: {
    data: [],
  },
  reducers: {
    dataCats: (state, action) => {
      state.data.push(...action.payload);
    },
    deleteData: (state, action) => {
      state.data.splice(state.data.findIndex(item => item.id === action.payload.id), 1);
    },
    toLike: (state, action) => {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      state.data[index].like = !state.data[index].like;
    }
  }
});

export const { dataCats, deleteData, toLike } = catFactsData.actions;

export default catFactsData.reducer;