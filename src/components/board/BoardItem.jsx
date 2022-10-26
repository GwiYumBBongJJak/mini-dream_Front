import { useNavigate } from "react-router-dom";
import { Box, ThirdHeading, Text } from "../../common";
import BoardReactions from "./BoardReactions";

const BoardItem = props => {
	const navigate = useNavigate();
	return (
		<Box
			variant="boardItem"
			onClick={() => navigate(`../detail/${props.boardId}`)}
		>
			<ThirdHeading>{props.boardTitle}</ThirdHeading>
			<Text>{props.nickname}</Text>
			<BoardReactions />
		</Box>
	);
};

export default BoardItem;
