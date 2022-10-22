import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoardDetailPage, BoardEditPage, BoardListPage } from "../pages/board";
import { SignUpPage, SignInPage } from "../pages/join";
import { RendingPage } from "../pages/rending";
import BoardLayout from "../layout/board";
import JoinLayout from "../layout/join";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RendingPage />} />
				<Route path="/join" element={<JoinLayout />}>
					<Route path="sign-in" element={<SignInPage />} />
					<Route path="sign-up" element={<SignUpPage />} />
				</Route>
				<Route path="/board" element={<BoardLayout />}>
					<Route path="main" element={<BoardListPage />} />
					<Route path="detail" element={<BoardDetailPage />} />
					<Route path="edit" element={<BoardEditPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
