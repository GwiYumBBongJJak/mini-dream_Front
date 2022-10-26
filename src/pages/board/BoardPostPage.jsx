import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	Button,
	Flex,
	Header,
	Input,
	TextArea,
	Form,
	Box,
	Margin,
} from "../../common";
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
				<Flex jc="center" ai="center" height="100%">
					<FirstHeading color="white" fs="38px" ls="0.06em">
						Contribute
					</FirstHeading>
				</Flex>
			</Header>
			<Box variant="edit-box">
				<Button
					variant="back-button"
					color="white"
					onClick={() => navigate(-1)}
				>
					뒤로가기
				</Button>
				<Flex width="100%" height="70vh" fd="column" jc="center" ai="center">
					<Form onSubmit={handleOnSubmit}>
						<Flex fd="column" ai="center" jc="center">
							<Flex gap="10px">
								<Input
									theme="edit"
									name="boardTitle"
									value={boardItem.boardTitle}
									onChange={handleOnChange}
									placeholder="오늘 당신이 꾼 꿈은 무엇인가요?"
								/>
								<Button
									disabled={!activation}
									size="big"
									bgColor="lightPurple"
									color="white"
									radius="true"
									shadow="true"
									fontSize="small"
								>
									등록
								</Button>
							</Flex>
							<TextArea
								name="boardContent"
								value={boardItem.boardContent}
								onChange={handleOnChange}
								placeholder="오늘 꾸신 꿈 내용을 마음껏 입력해보아요!"
							/>
						</Flex>
					</Form>
				</Flex>
			</Box>
		</>
	);
};

export default BoardPostPage;
