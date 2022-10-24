import { Link, Navigate, useNavigate } from "react-router-dom";
import { Box, ThirdHeading, Text } from "../../common";
import BoardReactions from "./BoardReactions";

const BoardItem = props => {
	const navigate = useNavigate();
	return (
		// <Link to=`../detail/${props.id}`>
		<Box onClick={() => navigate(`../detail/${props.id}`)}>
			<ThirdHeading>{props.boardTitle}</ThirdHeading>
			<Text>{props.boardContent}</Text>
			<BoardReactions />
		</Box>
		// </Link>
	);
};

export default BoardItem;
