import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";
import { Box, FirstHeading, Flex, Header, Margin } from "../../common";
import { useEffect } from "react";

const BoardListPage = () => {
	const dispatch = useDispatch();

	const { isBoardChange, boardItems, reactions } = useSelector(
		state => state.board,
	);
	console.log("isBoard =>", isBoardChange);

	useEffect(() => {
		dispatch(__getBoardList());
		if (isBoardChange) dispatch(__getBoardList());
	}, [dispatch, isBoardChange, reactions]);

	return (
		<>
			<Header>
				<Flex jc="center" ai="center" height="100%">
					<FirstHeading color="white" fs="38px" fw="600" ls="0.05em">
						Dream Repository
					</FirstHeading>
				</Flex>
			</Header>
			<Margin margin="55px 0">
				<Box variant="main-list">
					{boardItems.map(boardListItem => (
						<BoardItem key={boardListItem.boardId} {...boardListItem} />
					))}
				</Box>
			</Margin>
		</>
	);
};

export default BoardListPage;
