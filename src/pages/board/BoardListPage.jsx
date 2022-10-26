import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";
import { useEffect } from "react";

const BoardListPage = () => {
	const dispatch = useDispatch();

	// const boardList = useSelector(state => state.board.boardItems);
	// useEffect(() => {
	// 	dispatch(__getBoardList());
	// }, [dispatch]);

	return (
		<>
			<FirstHeading>모아보기</FirstHeading>
			{/* {boardList.map(boardListItem => (
				<BoardItem key={boardListItem.boardId} {...boardListItem} />
			))} */}
		</>
	);
};

export default BoardListPage;
