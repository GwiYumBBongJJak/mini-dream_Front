import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input, TextArea } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { __updateBoardItem } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";

const BoardEditPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const response = useSelector(state => state.board.boardItem);

	const [boardItem, setBoardItem] = useState(response);

	const handleOnChange = e => {
		const { name, value } = e.target;
		setBoardItem({ ...boardItem, [name]: value });
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		dispatch(__updateBoardItem(boardItem));
		navigate(`../detail/${id}`);
	};

	return (
		<>
			<FirstHeading>작성하기</FirstHeading>
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
