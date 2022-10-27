import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
					<FirstHeading color="white" fs="38px" ls="0.1em" tt="uppercase">
						Detail
					</FirstHeading>
				</Flex>
			</Header>
			<Link to={-1}>
				<Button color="white">뒤로가기</Button>
			</Link>
			<Box variant="detail">
				<ThirdHeading>{boardItem.boardTitle}</ThirdHeading>
				<Text>{boardItem.boardContent}</Text>
				<Flex jc="flex-end" ai="center">
					<Margin margin="0 160px 0 0">
						<BoardReactions />
					</Margin>
					<Margin margin="0 50px 0 0">
						<BoardChangeBtns />
					</Margin>
				</Flex>
			</Box>
			{/* comments */}
			<Box>
				<dl>
					<dt>댓글</dt>
					<dl>{boardItem.comments?.length}</dl>
				</dl>
				<Box>
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
				</Box>
			</Box>
			{boardItem.comments?.map(comment => {
				return <BoardComment key={comment.commentId} comment={comment} />;
			})}
		</>
	);
};

export default BoardDetailPage;
