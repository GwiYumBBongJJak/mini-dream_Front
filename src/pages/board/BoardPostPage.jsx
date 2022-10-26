import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Flex, Header, Input, TextArea } from "../../common";
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
			<Header>
				<Flex>
					<FirstHeading>작성하기</FirstHeading>
				</Flex>
			</Header>
			<Link to={-1}>
				<Button color="white">뒤로가기</Button>
			</Link>
			<form onSubmit={handleOnSubmit}>
				<Input
					name="boardTitle"
					value={boardItem.boardTitle}
					onChange={handleOnChange}
				/>
				<Button
					disabled={!activation}
					size="big"
					bgColor="lightPurple"
					color="white"
					radius="true"
					shadow="true"
				>
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
