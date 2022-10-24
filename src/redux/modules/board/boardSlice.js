import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __addBoardItem = createAsyncThunk(
	"addBoardItem",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.post(
				`http://localhost:3001/boardItems`,
				// /auth/boards/create
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
			const response = await axios.put(
				`http://localhost:3001/boardItems/${payload.id}`,
				// /auth/boards/modify
				payload,
			);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __delBoardItem = createAsyncThunk(
	"deleteBoardItem",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.delete(
				`http://localhost:3001/boardItems/${payload}`,
				// /auth/boards/delete
			);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __getBoardList = createAsyncThunk(
	"getBoardList",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(
				`http://localhost:3001/boardItems`,
				// /boards
			);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __getBoardItem = createAsyncThunk(
	"getBoardItem",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.get(
				`http://localhost:3001/boardItems/${payload}`,
				// /boards/{boardId}
			);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const initialState = {
	boardItems: [],
	boardItem: {},
	statusAlertMessage: null,
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
			if (action.payload.statusCode === 200) {
				state.statusAlertMessage = action.payload.msg;
			}
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
