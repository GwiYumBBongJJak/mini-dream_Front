import { Box, ThirdHeading, Text } from "../../common";
import BoardReactions from "./BoardReactions";

const BoardItem = ({ children }) => {
	return (
		<Box>
			<ThirdHeading>{children}</ThirdHeading>
			<Text>{children}</Text>
			<BoardReactions />
		</Box>
	);
};

export default BoardItem;
