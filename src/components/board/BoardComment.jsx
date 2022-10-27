import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Input, Text, Flex, Margin } from "../../common";
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
								<Text fw="600" color="#877E8D" fs="17px" lh="1.5rem">
									{comment.nickname}
								</Text>
							</dl>
							<Box>
								{localStorage.getItem("nickname") === comment.nickname ? (
									<>
										{isEdit && currenCommentId ? (
											<>
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
												<Margin margin="20px 2px 10px 0">
													<Flex fd="column" ai="flex-end" jc="center">
														<Button
															variant="commentEdit"
															onClick={() => {
																dispatch(__editComment(modifiedComment));
																setIsEdit(prevState => !prevState);
															}}
														>
															EDIT
														</Button>
													</Flex>
												</Margin>
											</>
										) : (
											<>
												<Margin margin="12px 0">
													<dl>
														<Text color="##42364B" fs="18px">
															{comment.comment}
														</Text>
													</dl>
												</Margin>
												<Margin dp="inline-block" margin="0 10px 0 0">
													<Button
														variant="commentEdit"
														onClick={() => {
															setIsEdit(prevState => !prevState);
															setCurrentCommentId(comment.commentId);
														}}
													>
														수정
													</Button>
												</Margin>
												<Margin dp="inline-block">
													<Button
														variant="commentDel"
														onClick={() => {
															dispatch(__deleteComment(comment.commentId));
														}}
													>
														| 삭제
													</Button>
												</Margin>
											</>
										)}
									</>
								) : (
									<Text color="##42364B" fs="18px">
										{comment.comment}
									</Text>
								)}
							</Box>
						</li>
					</ul>
				</Box>
			</Box>
		</>
	);
};
export default BoardComment;
