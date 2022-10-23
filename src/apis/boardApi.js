import axios from "axios";

export const addBoardItemApi = boardItem => {
	axios.post(`http://localhost:3001/boardItems`, boardItem);
	// axios.post(`http://54.180.79.123:8080/auth/board/create`, boardItem);
};

export const getBoardListApi = async () => {
	const response = await axios.get(`http://localhost:3001/boardItems`);
	return response.data;
};
