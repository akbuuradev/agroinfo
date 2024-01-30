import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const addSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {},
});
