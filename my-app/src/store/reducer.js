import { createSlice } from '@reduxjs/toolkit'

export const catFactsData = createSlice({
  name: 'CAT_FACTS',
  initialState: {
    data: [],
  },
  reducers: {
    dataCats: (state, action) => {
        state.data = action.payload
    }
  },
})

export const { dataCats } = catFactsData.actions

export default catFactsData.reducer