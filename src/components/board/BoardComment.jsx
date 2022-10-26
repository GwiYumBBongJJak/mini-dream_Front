import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Input } from "../../common";
import {
	__checkCommentAvailability,
	__deleteComment,
	__editComment,
} from "../../redux/modules/comment/commentSlice";

const BoardComment = ({ comment }) => {
	const dispatch = useDispatch();

	// comment edit 기능
	const [isEdit, setIsEdit] = useState(false);
	const [currenCommentId, setCurrentCommentId] = useState(null);
	const [modifiedComment, setModifiedComment] = useState({
		commentId: comment.commentId,
		comment: { modifiedComment: "" },
	});

	return (
		<>
			<Box>
				<Box>
					<ul>
						<li>
							<dl>
								<dt>작성자</dt>
								<dd>{comment.nickname}</dd>
							</dl>
							{isEdit && currenCommentId ? (
								<Box>
									<Input
										defaultValue={comment.comment}
										onChange={e => {
											setModifiedComment(prevState => {
												return {
													...prevState,
													comment: { modifiedComment: e.target.value },
												};
											});
										}}
									/>
									<Button
										onClick={() => {
											dispatch(__editComment(modifiedComment));
											setIsEdit(prevState => !prevState);
										}}
									>
										수정
									</Button>
								</Box>
							) : (
								<Box>
									<dl>
										<dt>댓글 내용</dt>
										<dd>{comment.comment}</dd>
									</dl>
									<Button
										onClick={() => {
											dispatch(__checkCommentAvailability(comment.commentId));

											setIsEdit(prevState => !prevState);
											setCurrentCommentId(comment.commentId);
										}}
									>
										수정
									</Button>
								</Box>
							)}
							<Button
								onClick={() => {
									dispatch(__deleteComment(comment.commentId));
								}}
							>
								삭제
							</Button>
						</li>
					</ul>
				</Box>
			</Box>
		</>
	);
};
export default BoardComment;
