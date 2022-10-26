import { Nav, Flex, SecondHeading, Button, Margin, Box } from "../../common";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { __getUserInfo } from "../../redux/modules/join/joinSlice";
import { setLogout } from "../../redux/modules/join/joinSlice";

const BoardNav = () => {
	const { isLogin, nickname } = useSelector(state => state.join);
	console.log("isLogin => ", isLogin, "nickname =>", nickname);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// 유저 정보 가져오기
	const user = localStorage.getItem("jwtToken");
	useEffect(() => {
		if (user) {
			dispatch(__getUserInfo());
		}
	}, [dispatch, user]);

	return (
		<Nav>
			<Flex height="100%" ai="center" jc="center">
				<Box variant="nav-layout">
					<Flex jc="space-between">
						<SecondHeading variant="nav-logo" onClick={() => navigate("/")}>
							🌙 Heamong
						</SecondHeading>
						<Box>
							{isLogin ? (
								<Margin dp="inline-block" margin="0 40px 0 0">
									{" "}
									<Button
										color="white"
										fontSize="big"
										onClick={() => {
											localStorage.removeItem("jwtToken");
											dispatch(setLogout());
											navigate("/");
										}}
									>
										logout
									</Button>
								</Margin>
							) : (
								<Button onClick={() => navigate("/join/sign-in")}>login</Button>
							)}
							{/* 상세페이지일 경우 글쓰기 버튼이 보이지 않도록 처리 */}
							{location.pathname !== "/board/edit" && isLogin ? (
								<Button
									color="white"
									fontSize="big"
									onClick={() => navigate("/board/edit")}
								>
									글쓰기
								</Button>
							) : (
								""
							)}
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Nav>
	);
};

export default BoardNav;
