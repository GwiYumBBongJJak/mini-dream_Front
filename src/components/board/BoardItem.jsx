import { useNavigate } from "react-router-dom";
import { Box, ThirdHeading, Text } from "../../common";
import BoardReactions from "./BoardReactions";

const BoardItem = props => {
	console.log("@#@#", props);
	const navigate = useNavigate();
	return (
		<Box onClick={() => navigate(`../detail/${props.boardId}`)}>
			<ThirdHeading>{props.boardTitle}</ThirdHeading>
			<Text>{props.nickname}</Text>
			<BoardReactions />
		</Box>
	);
};

export default BoardItem;
