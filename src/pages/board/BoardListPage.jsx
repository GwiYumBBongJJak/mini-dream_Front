import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";
import { useEffect } from "react";

const BoardListPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("useEffect--");
		dispatch(__getBoardList());
		console.log("dispatch--");
	}, [dispatch]);

	const boardList = useSelector(state => state.board.BoardItems);
	console.log(boardList);

	if (boardList === undefined) {
		return null;
	}

	return (
		<>
			<FirstHeading>모아보기</FirstHeading>
			{boardList.map(boardListItem => (
				<BoardItem key={boardListItem.id} {...boardListItem} />
			))}
		</>
	);
};

export default BoardListPage;
