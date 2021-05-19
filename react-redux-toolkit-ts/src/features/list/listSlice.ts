import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';

const initialState = { 
  name: "ykp"
}

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    changeName: (state) => {
      state.name = "changed"
    },
  },
})

export const { changeName } = listSlice.actions

export const selectName = (state: RootState) => (state.list.name);

export default listSlice.reducer