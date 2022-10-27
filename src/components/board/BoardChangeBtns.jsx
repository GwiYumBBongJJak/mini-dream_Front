import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Margin } from "../../common";
import {
	__delBoardItem,
	__getBoardItem,
} from "../../redux/modules/board/boardSlice";

const BoardChangeBtns = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();

	const handleUpdate = () => {
		dispatch(__getBoardItem(id));
		navigate(`../edit/${id}`);
	};

	const handleDelete = () => {
		dispatch(__delBoardItem(id));
		navigate(`../main`);
	};

	return (
		<>
			{/* <Box width="100%"> */}
			{/* <Margin margin="0 20px 0 0"> */}
			<Button color="lightPurple" onClick={handleUpdate}>
				수정
			</Button>
			{/* </Margin> */}
			<Button color="darkPurple" onClick={handleDelete}>
				삭제
			</Button>
			{/* </Box> */}
		</>
	);
};

export default BoardChangeBtns;
