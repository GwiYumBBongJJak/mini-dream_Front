import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Flex, Margin } from "../../common";
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
			<Flex variant="editOrDel">
				<Margin margin="0 10px 0 0">
					<Button variant="commentEdit" onClick={handleUpdate}>
						EDIT
					</Button>
				</Margin>
				<Button variant="commentDel" onClick={handleDelete}>
					| DELETE
				</Button>
			</Flex>
		</>
	);
};

export default BoardChangeBtns;
