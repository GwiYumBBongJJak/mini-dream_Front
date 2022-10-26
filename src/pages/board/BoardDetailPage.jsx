// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Text, ThirdHeading, Input, Button } from "../../common";
import { BoardChangeBtns, BoardReactions } from "../../components/board";
import { __getBoardItem } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";
// comment
import {
	__addComment,
	__deleteComment,
	__editComment,
} from "../../redux/modules/comment/commentSlice";

const BoardDetailPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const boardItem = useSelector(state => state.board.boardItem);

	console.log("board Itme =>", boardItem.comments);
	useEffect(() => {
		dispatch(__getBoardItem(id));
	}, [dispatch, id]);

	// comment 기능
	const [commentValue, setCommentValue] = useState({
		boardId: id,
		comment: "",
	});

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
			{boardItem.comments?.map(comment => {
				return (
					<Box key={comment.comment_id}>
						<Box>
							<dl>
								<dt>댓글</dt>
								<dl>{boardItem.comments.length}</dl>
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
						<Box>
							<ul>
								<li>
									<dl>
										<dt>작성자</dt>
										<dd>{comment.nickname}</dd>
									</dl>
									<dl>
										<dt>댓글 내용</dt>
										<dd>{comment.comment}</dd>
									</dl>
									<Button
										onClick={() => {
											// dispatch(__editComment({ id: comment.id }));
										}}
									>
										수정
									</Button>
									<Button
										onClick={() => {
											// dispatch(__deleteComment(comment.id));
										}}
									>
										삭제
									</Button>
								</li>
							</ul>
						</Box>
					</Box>
				);
			})}
		</>
	);
};

export default BoardDetailPage;
