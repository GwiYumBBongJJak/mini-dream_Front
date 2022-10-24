import { useEffect } from "react";
import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";

const BoardListPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("useEffect--");
		dispatch(__getBoardList());
		console.log("dispatch--");
	}, [dispatch]);

	const boardList = useSelector(state => state.board.BoardItems);
	// console.log(boardList);

	// if (boardList === undefined) {
	// 	return null;
	// }

	return (
		<>
			{/* {boardList.map(boardListItem => (
				<BoardItem key={boardListItem.id} {...boardListItem} />
			))} */}
		</>
	);
};

export default BoardListPage;
