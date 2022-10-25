import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, TextArea } from "../../common";
import { useDispatch } from "react-redux";
import { __addBoardItem } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";

const BoardPostPage = () => {
	const dispatch = useDispatch();

	const init = {
		boardTitle: "",
		boardContent: "",
	};

	const [boardItem, setBoardItem] = useState(init);

	const handleOnChange = e => {
		const { name, value } = e.target;
		setBoardItem({ ...boardItem, [name]: value });
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		dispatch(__addBoardItem(boardItem));
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

export default BoardPostPage;
