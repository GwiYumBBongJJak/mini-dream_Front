import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBoardItemApi } from "../../../apis/boardApi";

export const __addBoardItem = createAsyncThunk(
	"addBoardItem",
	(boardItem, thunkAPI) => {
		addBoardItemApi(boardItem);
		thunkAPI.dispatch(addBoardItem(boardItem));
	},
);

const initialState = {
	boardItems: [],
	statusAlertMessage: null,
	boardItem: {},
};

const board = createSlice({
	name: "board",
	initialState,
	reducers: {
		addBoardItem: (state, action) => {
			state.boardItem = action.payload;
		},
	},
});

export const { addBoardItem } = board.actions;
export default board.reducer;
