import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Flex, Header, Input, TextArea, Box, Form } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import {
	__getBoardItem,
	__updateBoardItem,
} from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";
import useButton from "../../hooks/useButton";

const BoardEditPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const response = useSelector(state => state.board.boardItem);

	const [boardItem, setBoardItem] = useState({});
	const { activation } = useButton(boardItem);
	console.log("@ => boardItem", boardItem);

	useEffect(() => {
		dispatch(__getBoardItem(id));
	}, [dispatch, id]);

	useEffect(() => {
		setBoardItem(response);
	}, [response]);

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
			<Header>
				<Flex jc="center" ai="center" height="100%">
					<FirstHeading color="white" fs="38px" ls="0.06em">
						Contribute
					</FirstHeading>
				</Flex>
			</Header>
			<Flex width="100%" jc="center" ai="center">
				<Box width="800px">
					<Box pd="30px 0 0 22px">
						<Button
							variant="back-button"
							color="white"
							onClick={() => navigate(-1)}
						>
							뒤로가기
						</Button>
					</Box>
					<Flex width="100%" height="70vh" fd="column" jc="center" ai="center">
						<Form onSubmit={handleOnSubmit}>
							<Flex fd="column" ai="center" jc="center">
								<Flex gap="10px">
									<Input
										theme="edit"
										name="boardTitle"
										value={boardItem.boardTitle}
										onChange={handleOnChange}
									/>
									<Button
										size="big"
										bgColor="lightPurple"
										radius="true"
										color="white"
										shadow="true"
										fontSize="small"
										disabled={!activation}
									>
										등록
									</Button>
								</Flex>
								<TextArea
									name="boardContent"
									value={boardItem.boardContent}
									onChange={handleOnChange}
								/>
							</Flex>
						</Form>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default BoardEditPage;
