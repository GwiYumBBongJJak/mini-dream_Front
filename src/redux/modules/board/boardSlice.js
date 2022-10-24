import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
	addBoardItemApi,
	updateBoardItemApi,
	deleteBoardItemApi,
} from "../../../apis/boardApi";

export const __addBoardItem = createAsyncThunk(
	"addBoardItem",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.post(
				`http://localhost:3001/boardItems`,
				// `http://54.180.79.123:8080/api/auth/boards/create`,
				payload,
			);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __updateBoardItem = createAsyncThunk(
	"updateBoardItem",
	async (payload, thunkAPI) => {
		try {
			updateBoardItemApi(payload);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __delBoardItem = createAsyncThunk(
	"deleteBoardItem",
	async (payload, thunkAPI) => {
		try {
			deleteBoardItemApi(payload);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const initialState = {
	boardItems: [],
	boardItem: {},
	statusMsg: {},
};

const board = createSlice({
	name: "board",
	initialState,
	reducers: {},
	extraReducers: {
		[__addBoardItem.pending]: (state, action) => {},
		[__addBoardItem.fulfilled]: (state, action) => {
			console.log("fullfilled=>", action.payload);
			// state.boardItems.push(action.payload);
		},
		[__addBoardItem.rejected]: (state, action) => {
			console.log("rejected=>", action.payload);
		},

		[__updateBoardItem.pending]: (state, action) => {},
		[__updateBoardItem.fulfilled]: (state, action) => {
			console.log("fulfilled=>", action.payload);
		},
		[__updateBoardItem.rejected]: (state, action) => {
			console.log("rejected=>", action.payload);
		},

		[__delBoardItem.pending]: (state, action) => {},
		[__delBoardItem.fulfilled]: (state, action) => {
			console.log("fulfilled=>", action.payload);
		},
		[__delBoardItem.rejected]: (state, action) => {
			console.log("rejected=>", action.payload);
		},
	},
});

export const { addBoardItem } = board.actions;
export default board.reducer;
