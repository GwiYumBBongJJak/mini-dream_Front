import { configureStore } from "@reduxjs/toolkit";
import join from "../modules/join/joinSlice";
import board from "../modules/board/boardSlice";
import comment from "../modules/comment/commentSlice";

const store = configureStore({
	reducer: {
		join,
		board,
		comment,
	},
});

export default store;
