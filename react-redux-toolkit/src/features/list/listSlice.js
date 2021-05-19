import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  // name: 'kumiko',
  // school: 'kitauji',
};

export const changeSchoolAsync = createAsyncThunk(
  'profile/fetchSchool',
  async (school) => {
    const response = await fetch('https://api.github.com/users/kitaujiykp',{
      method: 'GET',
      mode: "cors",
    })
    const data = await response.json();
    return data.login
  }
);

export const listSlice = createSlice({
    
  name: 'profile',
  
  initialState,

  reducers: {

    changeName: (state) => {
      state.name = 'ykp';
    },

  },
  
  extraReducers: (builder) => {
    builder
      .addCase(changeSchoolAsync.pending, (state) => {
        state.school = 'loading';
      })
      .addCase(changeSchoolAsync.fulfilled, (state, action) => {
        state.school = action.payload;
      });
  },
  
});

export const { changeName } = listSlice.actions;

export const selectName = (state) => state.list.name;
export const selectSchool = (state) => state.list.school;

export default listSlice.reducer;