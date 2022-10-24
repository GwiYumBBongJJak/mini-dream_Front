import { useEffect } from "react";
import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";

const BoardListPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getBoardList);
	}, [dispatch]);

	const boardList = useSelector(state => state.board.BoardItems);
	console.log(boardList);

	return (
		<>
			{/* {boardList.map(boardListItem => (
				<BoardItem key={boardListItem.id} {...boardListItem} />
			))} */}
		</>
	);
};

export default BoardListPage;
