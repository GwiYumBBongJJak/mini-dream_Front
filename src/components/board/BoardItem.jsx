import { Box, ThirdHeading, Text } from "../../common";
import BoardReactions from "./BoardReactions";

const BoardItem = props => {
	console.log(props);
	return (
		<Box>
			<ThirdHeading>{props.boardTitle}</ThirdHeading>
			<Text>{props.boardContent}</Text>
			<BoardReactions />
		</Box>
	);
};

export default BoardItem;
