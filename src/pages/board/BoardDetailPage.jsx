import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Text, ThirdHeading, Input, Button } from "../../common";
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
	setCommentAvailability,
} from "../../redux/modules/comment/commentSlice";

const BoardDetailPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const boardItem = useSelector(state => state.board.boardItem);
	const { isCommentChange } = useSelector(state => state.comment);

	// 댓글 수정시 자동 렌더링
	useEffect(() => {
		dispatch(__getBoardItem(id));
		if (isCommentChange) dispatch(__getBoardItem(id));
	}, [isCommentChange, id, dispatch]);

	// comment 기능
	const [commentValue, setCommentValue] = useState({
		boardId: id,
		comment: "",
	});

	const { commentAvailability } = useSelector(state => state.comment);

	// 왜 여기로 옮기니까 되지..? ^^
	// -> 댓글 컴포넌트 내부에서 설정하면 반복문만큼 알림창이 떴구나!
	useEffect(() => {
		if (commentAvailability) {
			const { msg, statusCode } = commentAvailability;
			if (statusCode === 400) {
				alert(msg);
				dispatch(setCommentAvailability());
			} else if (statusCode === 200) {
				dispatch(setCommentAvailability());
			}
		}
	}, [commentAvailability, dispatch]);

	return (
		<>
			<FirstHeading>상세 페이지</FirstHeading>
			<Link to={-1}>뒤로가기</Link>
			<Box>
				<ThirdHeading>{boardItem.boardTitle}</ThirdHeading>
				<Text>{boardItem.boardContent}</Text>
				<BoardReactions />
				<BoardChangeBtns />
			</Box>
			{/* comments */}
			<Box>
				<dl>
					<dt>댓글</dt>
					<dl>{boardItem.comments?.length}</dl>
				</dl>
				<Box>
					<Input
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
