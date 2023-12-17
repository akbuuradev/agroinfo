import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../../type/IUser";
import { PayloadAction } from "@reduxjs/toolkit";
import { JsxEmit } from "typescript";

const postLocal: any = localStorage.getItem("postL");

interface PostSlice {
  post: IState;
}

const initialState: PostSlice = {
  post: JSON.parse(postLocal) || {
    email: '',
    password: '',
    password_confirm: '',
  },
};

export const YesSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost(state, action: PayloadAction<IState>) {
      localStorage.setItem("postL", JSON.stringify(state.post = action.payload));
    },
    deletePost(state, action: PayloadAction<IState>) {
      state.post = action.payload;
    },
  },
});

export default YesSlice.reducer;
export const { getPost, deletePost } = YesSlice.actions;
