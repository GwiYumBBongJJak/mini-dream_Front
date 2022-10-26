import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";
import { useEffect } from "react";

const BoardListPage = () => {
	const dispatch = useDispatch();

	// 이렇게 하면 괜찮고 비구조화할당 하면 안되는 이유?
	const boardList = useSelector(state => state.board.boardItems);
	const { isBoardChange } = useSelector(state => state.board);
	console.log("isBoard =>", isBoardChange);

	useEffect(() => {
		dispatch(__getBoardList());
		if (isBoardChange) dispatch(__getBoardList());
	}, [dispatch, isBoardChange]);

	return (
		<>
			<FirstHeading>모아보기</FirstHeading>
			{boardList.map(boardListItem => (
				<BoardItem key={boardListItem.boardId} {...boardListItem} />
			))}
		</>
	);
};

export default BoardListPage;
