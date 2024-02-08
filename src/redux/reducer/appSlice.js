import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const applicationSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
  
    setApplication: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setApplication } = applicationSlice.actions

export default applicationSlice.reducer