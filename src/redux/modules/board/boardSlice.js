import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const instance = axios.create({
// 	baseURL: process.env.REACT_APP_SERVER,
// 	headers: {
// 		Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
// 	},
// });

const BASE_URL = process.env.REACT_APP_SERVER;

export const __addBoardItem = createAsyncThunk(
	"board/addBoardItem",
	async (payload, thunkAPI) => {
		try {
			console.log("payload =>", payload);
			const response = await axios.post(
				`${BASE_URL}/auth/boards/create`,
				payload,
			);

			console.log("response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

// export const __addBoardItem = createAsyncThunk(
// 	"addBoardItem",
// 	async (payload, thunkAPI) => {
// 		try {
// 			// const response = await axios.post(
// 			// 	`http://localhost:3001/boardItems`,
// 			const response = await instance.post(`/auth/boards/create`, payload);
// 			return thunkAPI.fulfillWithValue(response.data);
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error);
// 		}
// 	},
// );

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
			console.log("thunk");
			const response = await axios.get(
				`http://localhost:3001/boardItems`,
				// /boards
			);
			console.log("response--", response);
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
			if (action.payload.statusCode === 200) {
				state.statusAlertMessage = action.payload.msg;
			}
		},
		[__addBoardItem.rejected]: (state, action) => {
			console.log("addBoardItem rejected=>", action.payload);
			state.error = action.payload;
		},

		// __updateBoardItem
		[__updateBoardItem.pending]: (state, action) => {},
		[__updateBoardItem.fulfilled]: (state, action) => {
			console.log("fulfilled=>", action.payload);
		},
		[__updateBoardItem.rejected]: (state, action) => {
			console.log("rejected=>", action.payload);
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
			console.log("fulfilled=>", action.payload);
			state.boardItem = action.payload;
		},
		[__getBoardItem.rejected]: (state, action) => {
			console.log("rejected=>", action.payload);
		},
	},
});

export const { addBoardItem } = board.actions;
export default board.reducer;
