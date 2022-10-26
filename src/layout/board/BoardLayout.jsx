import * as styles from "./BoardLayout.styles";
import { BoardNav } from "../../components/board";
import { Header } from "../../common";
import { Outlet } from "react-router-dom";

const BoardLayout = () => {
	return (
		<styles.BoardLayout>
			<BoardNav />
			<Header />
			<Outlet></Outlet>
		</styles.BoardLayout>
	);
};

export default BoardLayout;
