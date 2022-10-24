import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	user: null,
	token: null,
	isLogin: null,
	isLoading: false,
	error: null,
};

export const __requestSignUp = createAsyncThunk(
	"join/requestSignUp",
	async (payload, thunkAPI) => {
		try {
			console.log("requestSignUp payload =>", payload);
			const response = await axios.post(
				"http://54.180.79.123:8080/api/member/register",
				payload,
			);
			console.log("response =>", response.data);

			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __requestSignIn = createAsyncThunk(
	"join/requestSignIn",
	async (payload, thunkAPI) => {
		try {
			console.log("requestSignIn payload =>", payload);
			const response = await axios.post(
				"http://54.180.79.123:8080/api/member/login",
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

export const __checkNicknameDuplicate = createAsyncThunk(
	"join/idDuplicateCheck",
	async (payload, thunkAPI) => {
		try {
			console.log("checkNicknameDuplicate payload =>", payload);
			const nickname = payload;
			const response = await axios.get(
				`http://54.180.79.123:8080/api/member/nickname/${nickname}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			console.log("response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __checkIdDuplicate = createAsyncThunk(
	"join/nicknameDuplicate",
	async (payload, thunkAPI) => {
		try {
			console.log("checkIdDuplicate payload =>", payload);
			const username = payload;
			const response = await axios.get(
				`http://54.180.79.123:8080/api/member/id/${username}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			console.log("response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const joinSlice = createSlice({
	name: "join",
	initialState,
	reducers: {},
	extraReducers: {
		// 닉네임 확인
		[__checkNicknameDuplicate.pending]: (state, _) => {
			console.log("__checkNicknameDuplicate.pending");
			state.isLoading = true;
		},
		[__checkNicknameDuplicate.fulfilled]: (state, action) => {
			console.log("__checkNicknameDuplicate.fulfilled =>", action.payload);
			state.user = action.payload;
		},
		[__checkNicknameDuplicate.rejected]: (state, action) => {
			console.log("__checkNicknameDuplicate.rejected =>", action.payload);
			state.isLoading = false;
			state.error = action.payload;
		},
		// 아이디 확인
		[__checkIdDuplicate.pending]: (state, _) => {
			console.log("__checkIdDuplicate.pending");
			state.isLoading = true;
		},
		[__checkIdDuplicate.fulfilled]: (state, action) => {
			console.log("__checkIdDuplicate.fulfilled =>", action.payload);
			state.user = action.payload;
		},
		[__checkIdDuplicate.rejected]: (state, action) => {
			console.log("__checkIdDuplicate.rejected =>", action.payload);
			state.isLoading = false;
			state.error = action.payload;
		},
		// 회원가입
		[__requestSignUp.pending]: (state, _) => {
			console.log("__requestSignUp.pending");
			state.isLoading = true;
		},
		[__requestSignUp.fulfilled]: (state, action) => {
			console.log("__requestSignUp.fulfilled =>", action.payload);
			state.isLoading = false;
			state.user = action.payload;
		},
		[__requestSignUp.rejected]: (state, action) => {
			console.log("__requestSignUp.rejected =>", action.payload);
			state.isLoading = false;
			state.error = action.payload;
		},
		// 로그인
		[__requestSignIn.pending]: (state, _) => {
			console.log("__requestSignIn.pending =>");
			state.isLoading = true;
		},
		[__requestSignIn.fulfilled]: (state, action) => {
			console.log("__requestSignIn.fulfilled =>", action.payload);
			state.isLoading = false;
			state.token = action.payload.accessToken;
			localStorage.setItem("jwtToken", state.token);
			state.user = action.payload;
		},
		[__requestSignIn.rejected]: (state, action) => {
			console.log("__requestSignIn.rejected =>", action.payload);
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {} = joinSlice.actions;
export default joinSlice.reducer;
