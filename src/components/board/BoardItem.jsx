import { useNavigate } from "react-router-dom";
import { Box, ThirdHeading, Text, Flex, Button } from "../../common";
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
				<Flex width="100%" fd="column">
					<ThirdHeading fs="20px" color="#4A4452" fw="700" mb="10px">
						{props.boardTitle}
					</ThirdHeading>
					<Text color="#7E7B86" fw="600">
						{props.nickname}
					</Text>
				</Flex>
				<Flex>
					<Button variant="detail-button">Inspect</Button>
					{/* 추가 작업 */}
					{/* <BoardReactions boardId={props.boardId} /> */}
				</Flex>
			</Flex>
		</Box>
	);
};

export default BoardItem;
