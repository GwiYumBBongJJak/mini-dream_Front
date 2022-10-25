import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";
import { useEffect } from "react";

const BoardListPage = () => {
	const dispatch = useDispatch();

	const boardList = useSelector(state => state.board.boardItems);

	useEffect(() => {
		dispatch(__getBoardList());
	}, [dispatch]);

	//? key에 무엇을 넣어야 하는가..
	return (
		<>
			<FirstHeading>모아보기</FirstHeading>
			{boardList.map(boardListItem => (
				// const boardId = boardListItem.boardId
				<BoardItem key={boardListItem.id} {...boardListItem} />
				// <BoardItem key={boardId} {...boardListItem} />
			))}
		</>
	);
};

export default BoardListPage;
