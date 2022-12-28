// const { createSlice } = require('@reduxjs/toolkit');

// const profileSlice = createSlice({
//     name: 'profile',
//     initialState: [],
//     reducers: {
//         setUser(state, action) {
//             state.push(action.payload);
//         },
//         getUser(state, action) {
//             return state.filter((item) => item.id !== action.payload);
//         },
//     },
// });

// export const { setUser, getUser } = profileSlice.actions;
// export default profileSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit'
//     const foundUser = "User Not Found";

// const initialState = {
//   value: foundUser,
// }

// export const profileSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//     //   state.value += 1

//     const loggedInUser = localStorage.getItem("token");

//       if (loggedInUser) {
//         state.value = JSON.parse(loggedInUser);
//       }
//       else {
//         state.value;
//       }

//     },
//     // getUser: (state, action) => {
//     //   state.value -= 1
//     // },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { setUser } = profileSlice.actions

// export default profileSlice.reducer

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const profileSlice = createSlice({
  name: "profile",
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
      .addCase(getUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// export const { setProducts, setStatus } = productSlice.actions;
export default profileSlice.reducer;

// Thunks
export const getUser = createAsyncThunk("categoires/fetch", async () => {
  const loggedInUser = localStorage.getItem("token");

  const data = JSON.parse(loggedInUser);

  return data;
});
