import {
	Form,
	Input,
	Button,
	FirstHeading,
	Flex,
	Text,
	Margin,
} from "../../common";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	__requestSignIn,
	setStatusCode,
} from "../../redux/modules/join/joinSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInForm = () => {
	// Redux dispatcer
	const dispatch = useDispatch();
	// React Router
	const navigate = useNavigate();
	// React Hook Form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// 회원가입 상태 (성공, 실패) 메세지
	const { statusMessage, statusCode } = useSelector(state => state.join);
	// Alert 창
	const notify = () => toast.error(statusMessage);
	// 로그인 성공 / 실패 (statusCode) 값 변경에 따른 처리
	useEffect(() => {
		if (statusCode === 400) {
			dispatch(setStatusCode());
			notify(statusMessage);
		} else if (statusCode === 1004) {
			dispatch(setStatusCode());
			navigate("/board/main");
		}
	}, [statusMessage, statusCode, dispatch, navigate]);

	return (
		<>
			<Flex width="100%" height="100vh" jc="center" ai="center">
				<Form
					theme="signIn"
					onSubmit={handleSubmit(data => {
						const { id, password } = data;
						dispatch(__requestSignIn({ username: id, password }));
					})}
				>
					<Flex fd="column" jc="center" ai="center" height="100%" gap="27px">
						<FirstHeading color="#42364B" fs="35px" fw="700">
							LOGIN
						</FirstHeading>
						<Margin margin="0 0 0 0">
							<Input
								theme="long"
								placeholder="아이디를 입력해주세요"
								{...register("id", { required: true })}
							/>
						</Margin>
						{errors.id && errors.id.type === "required" && (
							<Text variant="join-alert-text">아이디를 입력해주세요.</Text>
						)}
						<Margin margin="0 0 0 0">
							<Input
								theme="long"
								placeholder="비밀번호를 입력해주세요"
								type="password"
								{...register("password", { required: true })}
							/>
						</Margin>
						{errors.password && errors.password.type === "required" && (
							<Text variant="join-alert-text">비밀번호를 입력해주세요.</Text>
						)}
						<Flex gap="15px">
							<Button
								size="long"
								bgColor="lightPurple"
								radius="true"
								color="white"
								border="true"
								fontSize="small"
								onClick={() => navigate("/join/sign-up")}
							>
								회원가입
							</Button>
							<Button
								size="long"
								bgColor="lightPurple"
								radius="true"
								color="white"
								border="true"
								fontSize="small"
							>
								로그인
							</Button>
						</Flex>
					</Flex>
				</Form>
			</Flex>
			<ToastContainer style={{ width: "400px" }} />
		</>
	);
};

export default SignInForm;
