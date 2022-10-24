// import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBoardItemApi } from "../../apis/boardApi";
import { Box, Text, ThirdHeading } from "../../common";
import { BoardChangeBtns, BoardReactions } from "../../components/board";

const BoardDetailPage = () => {
	const [boardItem, setBoardItem] = useState(null);
	// const boardItem = useSelector(state => state.board.boardItem);
	const { id } = useParams();

	const requestUpdate = useCallback(async () => {
		const response = await getBoardItemApi(id);
		setBoardItem(response);
	}, [id]);

	useEffect(() => {
		requestUpdate();
	}, [requestUpdate]);

	if (!boardItem) {
		return null;
	}

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
