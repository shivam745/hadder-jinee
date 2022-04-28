import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "SAVE_CREDS",
  initialState: { list: [] },
  reducers: {
    saveCreditials: (state, action) => {
      console.log(action);
      const user = action.payload;
      state.list = [{ ...user }];
    },
  },
});
export const { saveCreditials } = loginSlice.actions;
export default loginSlice.reducer;
