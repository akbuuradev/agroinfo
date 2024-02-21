import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../../type/IUser";
import { PayloadAction } from "@reduxjs/toolkit";

interface PostSlice {
  post: IState | null;
  userserver: any[]

}

const initialState: PostSlice = {
  post: null,
  userserver: [],
};

export const YesSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<IState>) {
      localStorage.setItem("postL", JSON.stringify(action.payload));
      state.post = action.payload;
    },
    deletePost(state, action: PayloadAction<IState>) {
      localStorage.removeItem("postL");
      state.post = null;
    },
  },
});

export default YesSlice.reducer;
export const { setPost, deletePost } = YesSlice.actions;
