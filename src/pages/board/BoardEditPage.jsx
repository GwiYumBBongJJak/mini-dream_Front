import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input, TextArea } from "../../common";
import { useDispatch } from "react-redux";
import {
	__addBoardItem,
	__updateBoardItem,
} from "../../redux/modules/board/boardSlice";
import { getBoardItemApi } from "../../apis/boardApi";

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
			dispatch(__updateBoardItem(boardItem));
		} else {
			dispatch(__addBoardItem(boardItem));
		}
		navigate(`../main`, { replace: true });
	};

	const requestUpdate = useCallback(async () => {
		if (isEdit) {
			const boardItem = await getBoardItemApi(id);
			setBoardItem(boardItem);
		}
	}, [id, isEdit]);

	useEffect(() => {
		requestUpdate();
	}, [requestUpdate]);

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
