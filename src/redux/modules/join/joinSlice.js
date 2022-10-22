import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getJoin = createAsyncThunk(
	"Join/getJoin",
	async (payload, thunkAPI) => {
		try {
			// 요청
			const data = await axios.get("http://54.180.79.123:8080/api/dummy");
			// 응답 성공이라면 콘솔에 찍혀야 함
			console.log("data =>", data);
			// 요청 성공시 호출 함수
			return thunkAPI.fulfillWithValue(data);
		} catch (error) {
			// 에러
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const joinSlice = createSlice({
	name: "join",
	initialState: { join: null },
	reducers: {},
	extraReducers: {
		[__getJoin.pending]: (state, _) => {},
		[__getJoin.fulfilled]: (state, action) => {
			console.log("action.payload =>", action.payload);
			state.join = action.payload;
		},
		[__getJoin.rejected]: (state, action) => {
			// 에러 발생시 찍히는 콘솔
			// action.payload 는 에러 객체
			console.log("__getJoin.rejected => ", action.payload);
			state.join = action.payload;
		},
	},
});

export const {} = joinSlice.actions;
export default joinSlice.reducer;
