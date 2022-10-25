import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input, TextArea } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import {
	__addBoardItem,
	__getBoardItem,
	__updateBoardItem,
} from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";

const BoardEditPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const response = useSelector(state => state.board.boardItem);
	console.log("response =>", response);
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
			dispatch(__updateBoardItem(boardItem));
		} else {
			dispatch(__addBoardItem(boardItem));
		}
		navigate(`../main`);
	};

	const requestUpdate = useCallback(async () => {
		if (isEdit) {
			console.log(3);
			dispatch(__getBoardItem(id));
			setBoardItem(response);
		}
	}, [dispatch, id, isEdit, response]);

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
