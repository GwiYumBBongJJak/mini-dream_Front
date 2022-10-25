import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Text } from "../../common";
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
		alert("삭제되었을수도?확인해보등가");
		navigate(`../main`);
	};

	return (
		<>
			<Text onClick={handleUpdate}>수정</Text>
			<Text onClick={handleDelete}>삭제</Text>
		</>
	);
};

export default BoardChangeBtns;
