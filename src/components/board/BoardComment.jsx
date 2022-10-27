import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Input, Text } from "../../common";
import {
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
			<Box variant="commentItem">
				<Box>
					<ul>
						<li>
							<dl>
								<Text color="#877E8D" fs="16px" lh="1.5rem">
									{comment.nickname}
								</Text>
							</dl>
							<Box>
								{localStorage.getItem("nickname") === comment.nickname ? (
									<>
										{isEdit && currenCommentId ? (
											<>
												<Box>
													<Input
														width="100%"
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
														variant="commentEdit"
														onClick={() => {
															dispatch(__editComment(modifiedComment));
															setIsEdit(prevState => !prevState);
														}}
													>
														수정
													</Button>
												</Box>
											</>
										) : (
											<>
												<Box>
													<dl>
														<Text color="##42364B" fs="18px">
															{comment.comment}
														</Text>
													</dl>
													{/* 여기부터 */}
													<Button
														variant="commentEdit"
														onClick={() => {
															setIsEdit(prevState => !prevState);
															setCurrentCommentId(comment.commentId);
														}}
													>
														수정
													</Button>
												</Box>
											</>
										)}
										<Button
											variant="commentDel"
											onClick={() => {
												dispatch(__deleteComment(comment.commentId));
											}}
										>
											삭제
										</Button>
										{/* 여기까지 */}
									</>
								) : null}
							</Box>
						</li>
					</ul>
				</Box>
			</Box>
		</>
	);
};
export default BoardComment;
