import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, TextArea } from "../../common";
import { useDispatch } from "react-redux";
import { __addBoardItem } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";
import useButton from "../../hooks/useButton";

const BoardPostPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const init = {
		boardTitle: "",
		boardContent: "",
	};

	const [boardItem, setBoardItem] = useState(init);
	const { activation } = useButton(boardItem);

	const handleOnChange = e => {
		const { name, value } = e.target;
		setBoardItem({ ...boardItem, [name]: value });
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		dispatch(__addBoardItem(boardItem));
		navigate(`../main`);
		// navigate(`../detail/`)
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
				<Button disabled={!activation} size="big">
					등록
				</Button>
				<TextArea
					name="boardContent"
					value={boardItem.boardContent}
					onChange={handleOnChange}
				/>
			</form>
		</>
	);
};

export default BoardPostPage;
