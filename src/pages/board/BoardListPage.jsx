import { BoardItem } from "../../components/board";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../../redux/modules/board/boardSlice";
import { FirstHeading } from "../../common";

const BoardListPage = () => {
	// const dispatch = useDispatch();

	// const boardList = useSelector(state => state.board.BoardItems);
	// console.log(boardList);

	// const nickname = useSelector(state => state.join.nickname);
	// console.log("nickname =>", nickname);

	return (
		<>
			<FirstHeading>모아보기</FirstHeading>
			{/* {boardList.map(boardListItem => (
				<BoardItem key={boardListItem.id} {...boardListItem} />
			))} */}
		</>
	);
};

export default BoardListPage;
