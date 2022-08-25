import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    flag:""
  };
  
  const userlogin = createSlice({
    name: "login",
    initialState,
    reducers: {
      loggin: (state, actions) => {
        state.flag=(actions.payload);
        console.log("state", state.flag);
      },
    },
  });
  
  export default userlogin.reducer;
  export const {loggin} = userlogin.actions;