import * as styles from "./BoardLayout.styles";
import { BoardNav } from "../../components/board";
import { Box, FirstHeading } from "../../common";
import { Outlet } from "react-router-dom";

const BoardLayout = () => {
	return (
		<styles.BoardLayout>
			<BoardNav />
			<Box>
				<FirstHeading>작성하기</FirstHeading>
			</Box>
			<Outlet></Outlet>
		</styles.BoardLayout>
	);
};

export default BoardLayout;
