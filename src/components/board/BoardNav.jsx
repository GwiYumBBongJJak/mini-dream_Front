import { Nav, SecondHeading, Button } from "../../common";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { __getUserInfo } from "../../redux/modules/join/joinSlice";
import { setLogout } from "../../redux/modules/join/joinSlice";

const BoardNav = () => {
	const { isLogin, isLoading } = useSelector(state => state.join);
	console.log("isLogin => ", isLogin);
	const location = useLocation();
	console.log("location =>", location.pathname);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// 유저 정보 가져오기
	useEffect(() => {
		if (localStorage.getItem("jwtToken")) dispatch(__getUserInfo());
	}, [dispatch]);

	return (
		<Nav>
			<SecondHeading onClick={() => navigate("/")}>解夢</SecondHeading>
			{isLogin ? (
				<Button
					onClick={() => {
						localStorage.removeItem("jwtToken");
						dispatch(setLogout());
						navigate("/");
					}}
				>
					logout
				</Button>
			) : (
				<Button onClick={() => navigate("/join/sign-in")}>login</Button>
			)}
			{/* 상세페이지일 경우 글쓰기 버튼이 보이지 않도록 처리 */}
			{location.pathname !== "/board/edit" && isLogin ? (
				<Button onClick={() => navigate("/board/edit")}>글쓰기</Button>
			) : (
				""
			)}
		</Nav>
	);
};

export default BoardNav;
