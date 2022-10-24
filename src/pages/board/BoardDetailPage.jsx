// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Text, ThirdHeading } from "../../common";
import { BoardChangeBtns, BoardReactions } from "../../components/board";
import { __getBoardItem } from "../../redux/modules/board/boardSlice";

const BoardDetailPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const boardItem = useSelector(state => state.board.boardItem);

	useEffect(() => {
		dispatch(__getBoardItem(id));
	}, [dispatch, id]);

	return (
		<>
			<Link to={-1}>뒤로가기</Link>
			<Box>
				<ThirdHeading>{boardItem.boardTitle}</ThirdHeading>
				<Text>{boardItem.boardContent}</Text>
				<BoardReactions />
				<BoardChangeBtns />
			</Box>
		</>
	);
};

export default BoardDetailPage;
