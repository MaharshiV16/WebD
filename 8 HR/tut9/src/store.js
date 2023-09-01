import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: { value: { userName: "" } },
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		},
		logout: (state, action) => {
			state.value = { userName: "" };
		},
	},
});

export const { login, logout } = userSlice.actions;

export const store = configureStore({ reducer: { user: userSlice.reducer } });
