import { useNavigate } from "react-router-dom";
import { Box, ThirdHeading, Text, Flex } from "../../common";
import BoardReactions from "./BoardReactions";

const BoardItem = props => {
	const navigate = useNavigate();
	return (
		<Box
			width="300px"
			variant="boardItem"
			onClick={() => navigate(`../detail/${props.boardId}`)}
		>
			<Flex fd="column" jc="space-around" ai="center" height="100%">
				<ThirdHeading fs="20px" color="#4A4452" fw="700">
					{props.boardTitle}
				</ThirdHeading>
				<Text color="#7E7B86" fw="600">
					{props.nickname}
				</Text>
				<Flex variant="list">
					<BoardReactions />
				</Flex>
			</Flex>
		</Box>
	);
};

export default BoardItem;
