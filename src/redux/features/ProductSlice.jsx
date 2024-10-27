import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
  data: []
};

const productSlice = createSlice({
  name: "product",
  initialState: initialStates,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    }
  }
});

export default productSlice.reducer;
export const { fetchProducts } = productSlice.actions;

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    try {
      const response = await fetch("/productData.JSON"); // Ensure this path is correct
      if (!response.ok) {
        // If the response status is not OK, throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json(); // Parse the JSON data
      dispatch(fetchProducts(result)); // Dispatch the result to update the state
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
}


