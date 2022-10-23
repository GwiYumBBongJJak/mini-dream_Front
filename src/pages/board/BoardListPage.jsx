import { useCallback, useEffect, useState } from "react";
import { BoardItem } from "../../components/board";
import { getBoardListApi } from "../../apis/boardApi";

const BoardListPage = () => {
	const [boardList, setBoardList] = useState([]);

	const requestUpdate = useCallback(async () => {
		const response = await getBoardListApi();
		setBoardList(response);
	}, []);

	useEffect(() => {
		requestUpdate();
	}, [requestUpdate]);

	return (
		<>
			{boardList.map(boardListItem => (
				<BoardItem key={boardListItem.id} {...boardListItem} />
			))}
		</>
	);
};

export default BoardListPage;
