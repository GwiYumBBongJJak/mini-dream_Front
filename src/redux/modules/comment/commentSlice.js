import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	comments: null,
	isLoading: null,
	statusCode: null,
	statusMessage: null,
	error: null,
};

// 댓글 추가
export const __addComment = createAsyncThunk(
	"comment/addComment",
	async (payload, thunkAPI) => {
		try {
			const { boardId } = payload;
			console.log("__addComment payload => ", payload);
			console.log("board id => ", +boardId);
			const token = localStorage.getItem("jwtToken");
			console.log(token);
			console.log("getUserInfo token =>", token);
			const response = await axios.post(
				`${BASE_URL}/auth/comments/${+boardId}/create`,
				payload,
				{
					headers: { Authorization: `${token}` },
				},
			);
			console.log("__addComment response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__addComment error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// 댓글 수정 권한 확인
export const __checkCommentAvailability = createAsyncThunk(
	"comment/checkCommentAvailability",
);

// 댓글 삭제
export const __deleteComment = createAsyncThunk(
	"comment/deleteComment",
	async (payload, thunkAPI) => {
		try {
			console.log("__deleteComment payload => ", payload);
			const response = await axios.delete(
				`http://localhost:3001/comments/${payload}`,
			);
			console.log("__deleteComment response =>", response);

			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__deleteComment error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// 댓글 수정
export const __editComment = createAsyncThunk(
	"comment/editComment",
	async (payload, thunkAPI) => {
		try {
			console.log("__deleteComment payload => ", payload);
			const response = await axios.patch(
				`http://localhost:3001/comments/${payload}`,
				payload,
			);
			console.log("__editComment response => ", response);

			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("__editComment error =>", error);

			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {},
	extraReducers: {
		// 댓글 등록
		[__addComment.pending]: (state, _) => {
			console.log("__addComment.pending");
			state.isLoading = true;
		},
		[__addComment.fulfilled]: (state, action) => {
			console.log("__addComment.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusMessage = action.payload.msg;
			state.statusCode = action.payload.statusCode;
		},
		[__addComment.rejected]: (state, action) => {
			console.log("__addComment.rejected =>", action.payload);
			state.isLoading = false;
			state.statusMessage = action.payload.msg;
			state.statusCode = action.payload.statusCode;
		},
		// 댓글 삭제
		[__deleteComment.pending]: (state, _) => {
			console.log("__deleteComment.pending");
			state.isLoading = true;
		},
		[__deleteComment.fulfilled]: (state, action) => {
			console.log("__deleteComment.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusMessage = action.payload.msg;
			state.statusCode = action.payload.statusCode;
		},
		[__deleteComment.rejected]: (state, action) => {
			console.log("__deleteComment.rejected =>", action.payload);
			state.isLoading = false;
			state.statusMessage = action.payload.msg;
			state.statusCode = action.payload.statusCode;
		},
		// 댓글 수정
		[__editComment.pending]: (state, _) => {
			console.log("__editComment.pending");
			state.isLoading = true;
		},
		[__editComment.fulfilled]: (state, action) => {
			console.log("__editComment.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusMessage = action.payload.msg;
			state.statusCode = action.payload.statusCode;
		},
		[__editComment.rejected]: (state, action) => {
			console.log("__editComment.rejected =>", action.payload);
			state.isLoading = false;
			state.statusMessage = action.payload.msg;
			state.statusCode = action.payload.statusCode;
		},
	},
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
