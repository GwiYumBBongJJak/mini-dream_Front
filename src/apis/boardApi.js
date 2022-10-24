import axios from "axios";

export const addBoardItemApi = boardItem => {
	axios.post(`http://54.180.79.123:8080/api/auth/boards/create`, boardItem);
};

export const getBoardListApi = async () => {
	const response = await axios.get(`http://localhost:3001/boardItems`);
	return response.data;
};

export const getBoardItemApi = async id => {
	const response = await axios.get(`http://localhost:3001/boardItems/${id}`);
	return response.data;
};

export const updateBoardItemApi = boardItem => {
	axios.patch(`http://localhost:3001/boardItems/${boardItem.id}`, boardItem);
	// axios.patch(`http://auth/board/modify${id}`);
};

export const deleteBoardItemApi = id => {
	axios.delete(`http://localhost:3001/boardItems/${id}`);
	// axios.patch(`http://auth/board/modify${id}`);
};
