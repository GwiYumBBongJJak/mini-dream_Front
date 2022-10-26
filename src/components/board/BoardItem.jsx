import { useNavigate } from "react-router-dom";
import { Box, ThirdHeading, Text } from "../../common";
import BoardReactions from "./BoardReactions";

const BoardItem = props => {
	const navigate = useNavigate();
	return (
		<Box
			width="300px"
			variant="boardItem"
			onClick={() => navigate(`../detail/${props.boardId}`)}
		>
			<ThirdHeading fs="20px" color="#4A4452" fw="700">
				{props.boardTitle}
			</ThirdHeading>
			<Text color="#7E7B86" fw="600">
				{props.nickname}
			</Text>
			<BoardReactions />
		</Box>
	);
};

export default BoardItem;
