const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //     state.data = action.payload;
    // },
    // setStatus(state, action) {
    //     state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// export const { setProducts, setStatus } = productSlice.actions;
export default categoriesSlice.reducer;

// Thunks
export const fetchCategories = createAsyncThunk("products/fetch", async () => {
  const res = await fetch(" http://127.0.0.1:8000/api/categories");
  const data = await res.json();
  return data;
});
