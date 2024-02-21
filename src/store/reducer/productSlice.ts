import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Iproduct } from "../../mains/Sale/CrProduct";

interface State {
  product: Iproduct[];
}

const initialState: State = {
  product: [],
};

export const addSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: function (state, action: PayloadAction<Iproduct>) {
      state.product = [...state.product, action.payload];
    },
  },
});



export const {addProduct} = addSlice.actions
export default addSlice.reducer;