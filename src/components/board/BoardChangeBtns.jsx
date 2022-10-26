import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../common";
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
			<Button color="lightPurple" onClick={handleUpdate}>
				수정
			</Button>
			<Button color="darkPurple" onClick={handleDelete}>
				삭제
			</Button>
		</>
	);
};

export default BoardChangeBtns;
