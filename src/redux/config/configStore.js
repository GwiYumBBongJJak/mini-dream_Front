import { configureStore } from "@reduxjs/toolkit";
import join from "../modules/join/joinSlice";
import board from "../modules/board/boardSlice";

const store = configureStore({
	reducer: {
		join,
		board,
	},
});

export default store;
