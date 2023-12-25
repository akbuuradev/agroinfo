import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  token: string | null;
}

const initialState: TokenState = {
  token: null,
};

export const TokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
      state.token = action.payload;
    },
  },
});

export default TokenSlice.reducer;
export const { setToken } = TokenSlice.actions;
