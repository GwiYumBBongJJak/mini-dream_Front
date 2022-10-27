import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	boardItems: [],
	boardItem: {},
	statusAlertMessage: null,
	statusMsg: {},
	error: null,
	reactions: [],
	isBoardChange: false,
};

export const __addBoardItem = createAsyncThunk(
	"board/addBoardItem",
	async (payload, thunkAPI) => {
		try {
			console.log("__addBoardItem payload =>", payload);
			const token = localStorage.getItem("jwtToken");
			console.log("getUserInfo token =>", token);
			const response = await axios.post(
				`${BASE_URL}/auth/boards/create`,
				payload,
				{
					headers: { Authorization: `${token}` },
				},
			);
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
			const token = localStorage.getItem("jwtToken");
			console.log("getUserInfo token =>", token);
			const response = await axios.put(
				`${BASE_URL}/auth/boards/modify/${payload.boardId}`,
				payload,
				{
					headers: { Authorization: `${token}` },
				},
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
			const token = localStorage.getItem("jwtToken");
			console.log("getUserInfo token =>", token);
			const response = await axios.delete(
				`${BASE_URL}/auth/boards/delete/${payload}`,
				{
					headers: { Authorization: `${token}` },
				},
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
			const token = localStorage.getItem("jwtToken");
			console.log("getUserInfo token =>", token);
			const response = await axios.get(`${BASE_URL}/boards`);
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
			console.log("__getBoardItem payload =>", payload);
			const token = localStorage.getItem("jwtToken");
			console.log("getUserInfo token =>", token);
			const response = await axios.get(`${BASE_URL}/boards/${payload}`);
			console.log("__getBoardItem response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__getBoardItem error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

// 리액션 추가 / 삭제 요청 API
export const __updateReactions = createAsyncThunk(
	"updateReaction",
	async (payload, thunkAPI) => {
		try {
			console.log("updateReaction payload =>", payload);
			const { boardId, action } = payload;
			console.log("boardId ==>", +boardId, "reacton =>", action);
			const token = localStorage.getItem("jwtToken");
			console.log("getUserInfo token =>", token);
			const response = await axios.post(
				`${BASE_URL}/auth/${+boardId}/${action}`,
				payload,
				{
					headers: { Authorization: `${token}` },
				},
			);
			console.log("updateReactions respone=>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("updateReaciotns error => ", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

const board = createSlice({
	name: "board",
	initialState,
	reducers: {},
	extraReducers: {
		// __addBoardItem
		[__addBoardItem.pending]: (state, action) => {},
		[__addBoardItem.fulfilled]: (state, action) => {
			console.log("addBoardItem fullfilled=>", action.payload);
			state.isBoardChange = !state.isBoardChange;
		},
		[__addBoardItem.rejected]: (state, action) => {
			console.log("addBoardItem rejected=>", action.payload);
		},

		// __updateBoardItem
		[__updateBoardItem.pending]: (state, action) => {},
		[__updateBoardItem.fulfilled]: (state, action) => {
			console.log("__updateBoardItem fulfilled=>", action.payload);
			state.isBoardChange = !state.isBoardChange;
		},
		[__updateBoardItem.rejected]: (state, action) => {
			console.log("__updateBoardItem rejected=>", action.payload);
		},

		// __delBoardItem
		[__delBoardItem.pending]: (state, action) => {},
		[__delBoardItem.fulfilled]: (state, action) => {
			console.log("__delBoardItem fulfilled=>", action.payload);
			state.isBoardChange = !state.isBoardChange;
		},
		[__delBoardItem.rejected]: (state, action) => {
			console.log("__delBoardItem rejected=>", action.payload);
		},

		// __getBoardList
		[__getBoardList.pending]: (state, action) => {},
		[__getBoardList.fulfilled]: (state, action) => {
			console.log("__getBoardListfulfilled=>", action.payload);
			state.boardItems = action.payload;
		},
		[__getBoardList.rejected]: (state, action) => {
			console.log("__getBoardListrejected=>", action.payload);
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

		// 리액션 추가 / 상세 요청 응답
		[__updateReactions.pending]: (state, _) => {
			console.log("__updateReactions pending");
		},
		[__updateReactions.fulfilled]: (state, action) => {
			console.log("__updateReactions fulfilled=>", action.payload);
			state.reactions = action.payload;
		},
		[__updateReactions.rejected]: (state, action) => {
			console.log("__updateReactions rejected=>", action.payload);
		},
	},
});

export const { addBoardItem } = board.actions;
export default board.reducer;
