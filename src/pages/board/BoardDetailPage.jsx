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
	__getComment,
	__addComment,
	__deleteComment,
	__editComment,
} from "../../redux/modules/comment/commentSlice";

const BoardDetailPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const boardItem = useSelector(state => state.board.boardItem);

	useEffect(() => {
		dispatch(__getBoardItem(id));
	}, [dispatch, id]);

	// comment 기능
	const [commentValue, setCommentValue] = useState({
		boardId: id,
		comment: "",
	});

	// comment get test code
	useEffect(() => {
		dispatch(__getComment());
	}, [dispatch]);

	const { comments } = useSelector(state => state.comment);
	console.log("comments =>", comments);

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
				<Box>
					<dl>
						<dt>댓글</dt>
						<dl>3개</dl>
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
				{comments?.map(comment => {
					return (
						<Box>
							<ul>
								<li>
									<dl>
										<dt>작성자</dt>
										<dd>멋쟁이 토마토</dd>
									</dl>
									<dl>
										<dt>댓글 내용</dt>
										<dd>동글동글 멋진 몸매에</dd>
									</dl>
									<Button
										onClick={() => {
											dispatch(__editComment({ id: comment.id }));
										}}
									>
										수정
									</Button>
									<Button
										onClick={() => {
											dispatch(__deleteComment(comment.id));
										}}
									>
										삭제
									</Button>
								</li>
							</ul>
						</Box>
					);
				})}
			</Box>
		</>
	);
};

export default BoardDetailPage;
