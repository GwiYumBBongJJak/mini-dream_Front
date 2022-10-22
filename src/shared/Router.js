import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoardDetailPage, BoardEditPage, BoardListPage } from "../pages/board";
import { SignUpPage, SignInPage } from "../pages/join";
import BoardLayout from "../layout/board";
import JoinLayout from "../layout/join";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<JoinLayout />}>
					<Route path="sign-in" element={<SignInPage />} />
					<Route path="sign-up" element={<SignUpPage />} />
				</Route>
				<Route path="/board" element={<BoardLayout />}>
					<Route path="edit" element={<BoardEditPage />} />
					<Route path="main" element={<BoardListPage />} />
					<Route path="detail" element={<BoardDetailPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
