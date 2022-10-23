import { Box, Button, Text, ThirdHeading } from "../../common";
import { BoardChangeBtns, BoardReactions } from "../../components/board";

const BoardDetailPage = () => {
	return (
		<>
			<Button>뒤로가기</Button>
			<Box>
				<ThirdHeading />
				<Text />
				<BoardReactions />
				<BoardChangeBtns />
			</Box>
		</>
	);
};

export default BoardDetailPage;
