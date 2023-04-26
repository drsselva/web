import { createSlice } from '@reduxjs/toolkit'
export const initialState = {
logindetails:{}
}

const logindetailsSlice = createSlice({
  name: 'logindetails',
  initialState,
  reducers: {
    getprofile: (state, { payload }) => {
      state.logindetails=payload
    },
   
  
  },
})

export const {getprofile} = logindetailsSlice.actions
export const logindetailSelector = state => state.logindetails
export default logindetailsSlice.reducer
