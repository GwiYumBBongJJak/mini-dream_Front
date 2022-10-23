import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Text, ThirdHeading } from "../../common";
import { BoardChangeBtns, BoardReactions } from "../../components/board";

const BoardDetailPage = () => {
	const boardItem = useSelector(state => state.board.boardItem);

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
