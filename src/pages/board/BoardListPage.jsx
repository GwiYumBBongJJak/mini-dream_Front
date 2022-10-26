import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";
import { FirstHeading, Flex, Header } from "../../common";
import { useEffect } from "react";

const BoardListPage = () => {
	const dispatch = useDispatch();

	const { isBoardChange, boardItems } = useSelector(state => state.board);
	console.log("isBoard =>", isBoardChange);

	useEffect(() => {
		dispatch(__getBoardList());
		if (isBoardChange) dispatch(__getBoardList());
	}, [dispatch, isBoardChange]);

	return (
		<>
			<Header>
				<Flex align="center">
					<FirstHeading>모아보기</FirstHeading>
				</Flex>
			</Header>
			{boardItems.map(boardListItem => (
				<BoardItem key={boardListItem.boardId} {...boardListItem} />
			))}
		</>
	);
};

export default BoardListPage;
