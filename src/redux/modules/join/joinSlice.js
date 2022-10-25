import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	nickname: null,
	statusMessage: null,
	statusCode: null,
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
				`http://54.180.79.123:8080/member/register`,
				payload,
			);

			console.log("requestSignUp response =>", response.data);

			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("requestSignUp error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const __requestSignIn = createAsyncThunk(
	"join/requestSignIn",
	async (payload, thunkAPI) => {
		try {
			console.log("requestSignIn payload =>", payload);
			console.log();
			const response = await axios.post(`${BASE_URL}/member/login`, payload);

			console.log("requestSignIn response =>", response);

			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("requestSignIn error =>", error.response);
			return thunkAPI.rejectWithValue(error.response);
		}
	},
);

export const __checkNicknameDuplicate = createAsyncThunk(
	"join/idDuplicateCheck",
	async (payload, thunkAPI) => {
		try {
			console.log("checkNicknameDuplicate payload =>", payload);
			const nickname = payload;
			const response = await axios.post(
				`${BASE_URL}/member/nickname/${nickname}`,
			);
			console.log("checkNicknameDuplicate response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("checkNicknameDuplicate error =>", error);
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
			const response = await axios.post(`${BASE_URL}/member/id/${username}`);
			console.log("checkIdDuplicate response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("checkIdDuplicate error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

// 유저 정보를 가져오기
export const __getUserInfo = createAsyncThunk(
	"join/getUserInfo",
	async (payload, thunkAPI) => {
		try {
			const token = localStorage.getItem("jwtToken");
			console.log("getUserInfo token =>", token);
			const response = await axios.get(`${BASE_URL}/auth/member/info`, {
				headers: { Authorization: `${token}` },
			});
			console.log("getUserInfo response =>", response);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			console.log("getUserInfo error =>", error);
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const joinSlice = createSlice({
	name: "join",
	initialState,
	reducers: {
		setLogout: (state, _) => {
			state.isLogin = false;
		},
	},
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
			localStorage.setItem("jwtToken", action.payload.accessToken);
			state.nickname = action.payload.nickname;
			state.isLogin = true;
		},
		[__requestSignIn.rejected]: (state, action) => {
			console.log("__requestSignIn.rejected =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.status;
			state.statusMessage = action.payload.data;
		},
		// 사용자 정보 가져오기
		[__getUserInfo.pending]: (state, _) => {
			console.log("__getUserInfo.pending =>");
			state.isLoading = true;
		},
		[__getUserInfo.fulfilled]: (state, action) => {
			console.log("__getUserInfo.fulfilled =>", action.payload);
			state.isLoading = false;
			state.nickname = action.payload.nickname;
			state.isLogin = true;
		},
		[__getUserInfo.rejected]: (state, action) => {
			console.log("__getUserInfo.rejected =>", action.payload);
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { setLogout } = joinSlice.actions;
export default joinSlice.reducer;
