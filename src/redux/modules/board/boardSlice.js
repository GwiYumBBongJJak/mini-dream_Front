import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_SERVER,
	headers: {
		Authorization: `${localStorage.getItem("jwtToken")}`,
	},
});

export const __addBoardItem = createAsyncThunk(
	"board/addBoardItem",
	async (payload, thunkAPI) => {
		try {
			console.log("__addBoardItem payload =>", payload);
			const response = await instance.post(`/api/auth/boards/create`, payload);
			console.log("__addBoardItem response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__addBoardItem error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const __updateBoardItem = createAsyncThunk(
	"updateBoardItem",
	async (payload, thunkAPI) => {
		try {
			console.log("__updateBoardItem payload =>", payload);
			const response = await instance.put(
				`/api/auth/boards/update/${payload.id}`,
				payload,
			);
			console.log("__updateBoardItem response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__updateBoardItem error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __delBoardItem = createAsyncThunk(
	"deleteBoardItem",
	async (payload, thunkAPI) => {
		try {
			console.log("__delBoardItem payload =>", payload);
			const response = await instance.delete(
				`/api/auth/boards/delete/${payload}`,
			);
			console.log("__delBoardItem response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__delBoardItem error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __getBoardList = createAsyncThunk(
	"getBoardList",
	async (_, thunkAPI) => {
		try {
			const response = await instance.get(`/api/boards`);
			console.log("__getBoardList response =>", response);
			return thunkAPI.fulfillWithValue(response.data.boardResponseDtos);
		} catch (error) {
			console.log("__getBoardList error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __getBoardItem = createAsyncThunk(
	"getBoardItem",
	async (payload, thunkAPI) => {
		try {
			console.log("__delBoardItem payload =>", payload);
			const response = await instance.get(`/api/auth/boards/${payload}`);
			console.log("__getBoardItem response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__getBoardItem error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const initialState = {
	boardItems: [],
	boardItem: {},
	statusAlertMessage: null,
	statusMsg: {},
	error: null,
};

const board = createSlice({
	name: "board",
	initialState,
	reducers: {},
	extraReducers: {
		// __addBoardItem
		[__addBoardItem.pending]: (state, action) => {},
		[__addBoardItem.fulfilled]: (state, action) => {
			console.log("addBoardItem fullfilled=>", action.payload);
			// state.boardItems.push(action.payload);
		},
		[__addBoardItem.rejected]: (state, action) => {
			console.log("addBoardItem rejected=>", action.payload);
		},

		// __updateBoardItem
		[__updateBoardItem.pending]: (state, action) => {},
		[__updateBoardItem.fulfilled]: (state, action) => {
			console.log("__updateBoardItem fulfilled=>", action.payload);
		},
		[__updateBoardItem.rejected]: (state, action) => {
			console.log("__updateBoardItem rejected=>", action.payload);
		},

		// __delBoardItem
		[__delBoardItem.pending]: (state, action) => {},
		[__delBoardItem.fulfilled]: (state, action) => {
			console.log("fulfilled=>", action.payload);
		},
		[__delBoardItem.rejected]: (state, action) => {
			console.log("rejected=>", action.payload);
		},

		// __getBoardList
		[__getBoardList.pending]: (state, action) => {},
		[__getBoardList.fulfilled]: (state, action) => {
			console.log("fulfilled=>", action.payload);
			state.boardItems = action.payload;
		},
		[__getBoardList.rejected]: (state, action) => {
			console.log("rejected=>", action.payload);
		},

		// __getBoardItem
		[__getBoardItem.pending]: (state, action) => {},
		[__getBoardItem.fulfilled]: (state, action) => {
			console.log("__getBoardItem fulfilled=>", action.payload);
			state.boardItem = action.payload;
		},
		[__getBoardItem.rejected]: (state, action) => {
			console.log("__getBoardItem rejected=>", action.payload);
		},
	},
});

export const { addBoardItem } = board.actions;
export default board.reducer;
