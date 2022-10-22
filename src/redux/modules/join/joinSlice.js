import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getJoin = createAsyncThunk(
	"Join/getJoin",
	async (payload, thunkAPI) => {
		try {
			console.log("payload => ", payload);
			const data = await axios.get("http://54.180.79.123:8080/api/dummy");

			console.log("data =>", data);

			return thunkAPI.fulfillWithValue(data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const joinSlice = createSlice({
	name: "join",
	initialState: { test: null },
	reducers: {},
	extraReducers: {
		[__getJoin.pending]: (state, _) => {},
		[__getJoin.fulfilled]: (state, action) => {
			console.log("action.payload =>", action.payload);
			state.join = action.payload;
		},
		[__getJoin.rejected]: (state, action) => {
			console.log("__getJoin.rejected => ", JSON.parse(action.payload));
			state.join = action.payload;
		},
	},
});

export const {} = joinSlice.actions;
export default joinSlice.reducer;
