import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
	Box,
	Text,
	ThirdHeading,
	Input,
	Button,
	Header,
	Flex,
	Margin,
} from "../../common";
import {
	BoardChangeBtns,
	BoardReactions,
	BoardComment,
} from "../../components/board";
import { __getBoardItem } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";
// comment
import {
	__addComment,
	// setCommentAvailability,
} from "../../redux/modules/comment/commentSlice";

const BoardDetailPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();

	const { boardItem, isBoardChange } = useSelector(state => state.board);
	const { isCommentChange } = useSelector(state => state.comment);

	useEffect(() => {
		dispatch(__getBoardItem(id));
		if (isCommentChange) dispatch(__getBoardItem(id));
		if (isBoardChange) dispatch(__getBoardItem(id));
	}, [isCommentChange, isBoardChange, id, dispatch]);

	// comment
	const [commentValue, setCommentValue] = useState({
		boardId: id,
		comment: "",
	});

	return (
		<>
			<Header>
				<Flex jc="center" ai="center" height="100%">
					<FirstHeading color="white" fs="38px" ls="0.06em" tt="uppercase">
						Detail
					</FirstHeading>
				</Flex>
			</Header>
			<Flex fd="column" ai="center">
				<Flex jc="center" width="100%" margin="50px 730px 0 0">
					<Button
						variant="back-button"
						onClick={() => navigate(-1)}
						color="white"
					>
						뒤로가기
					</Button>
				</Flex>
				<Box variant="detail">
					<Flex jc="center">
						<ThirdHeading mb="35px" fs="23px" color="#42364B">
							{boardItem.boardTitle}
						</ThirdHeading>
					</Flex>
					<Text lh="1.3em" ls="0.1em" fs="19px" color="#42364B">
						{boardItem.boardContent}
					</Text>
					<Flex variant="detailReactions" width="100%">
						<BoardReactions />
					</Flex>
					<BoardChangeBtns />
					<dl>
						<Flex width="100%" fd="row" jc="flex-start">
							<Margin margin="0 5px 10px 0">
								<dt>댓글</dt>
							</Margin>
							<dl>{boardItem.comments?.length}</dl>
						</Flex>
					</dl>
					<Flex>
						<Margin margin="0 5px 0 0">
							<Input
								theme="comment"
								onChange={e => {
									setCommentValue(prevState => {
										return {
											...prevState,
											comment: e.target.value,
										};
									});
								}}
							/>
						</Margin>
						<Button
							size="small"
							bgColor="lightPurple"
							radius="true"
							color="white"
							shadow="true"
							fontSize="small"
							onClick={() => {
								dispatch(__addComment(commentValue));
							}}
						>
							등록
						</Button>
					</Flex>
					<Box variant="comments">
						{boardItem.comments?.map(comment => {
							return <BoardComment key={comment.commentId} comment={comment} />;
						})}
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default BoardDetailPage;
