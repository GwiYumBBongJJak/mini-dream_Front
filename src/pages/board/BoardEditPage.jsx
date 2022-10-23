import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input, TextArea } from "../../common";
import { useDispatch } from "react-redux";
import { __addBoardItem } from "../../redux/modules/board/boardSlice";

const BoardEditPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const init = {
		boardTitle: "",
		boardContent: "",
	};

	const [boardItem, setBoardItem] = useState(init);

	const isEdit = useMemo(() => (id ? true : false), [id]);

	const handleOnChange = e => {
		const { name, value } = e.target;
		setBoardItem({ ...boardItem, [name]: value });
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		if (isEdit) {
			console.log("수정중이네");
		} else {
			dispatch(__addBoardItem(boardItem));
		}
		navigate("../detail", { replace: true });
	};

	return (
		<>
			<Link to={-1}>뒤로가기</Link>
			<form onSubmit={handleOnSubmit}>
				<Input
					name="boardTitle"
					value={boardItem.boardTitle}
					onChange={handleOnChange}
				/>
				<Button>등록</Button>
				<TextArea
					name="boardContent"
					value={boardItem.boardContent}
					onChange={handleOnChange}
				/>
			</form>
		</>
	);
};

export default BoardEditPage;
