import {
	Form,
	FirstHeading,
	Input,
	Button,
	Flex,
	Text,
	Margin,
} from "../../common";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
	__requestSignUp,
	setStatusCode,
} from "../../redux/modules/join/joinSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
	// Redux dispatcer
	const dispatch = useDispatch();
	// React-Router
	const navigate = useNavigate();
	// React Hook Form
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	// 회원가입 상태 (성공, 실패) 메세지
	const { statusCode, statusMessage } = useSelector(state => state.join);

	// 비밀번호 재입력값 확인
	const password = useRef();
	password.current = watch("password");
	// Alert 창
	const notify = () => toast.error(statusMessage);
	// 회원가입시 성공 / 실패 (statusCode) 값 변경에 따른 처리
	useEffect(() => {
		if (statusCode === 400) {
			dispatch(setStatusCode());
			notify(statusMessage);
		} else if (statusCode === 200) {
			dispatch(setStatusCode());
			navigate("/join/sign-in");
		}
	}, [statusMessage, statusCode, setStatusCode, dispatch]);

	return (
		<>
			<Flex width="100%" height="100vh" jc="center" ai="center">
				<Form
					theme="signUp"
					onSubmit={handleSubmit(data => {
						const { nickname, id, password } = data;
						dispatch(__requestSignUp({ nickname, username: id, password }));
					})}
				>
					<Flex fd="column" jc="center" ai="center" height="100%" gap="30px">
						<FirstHeading color="#42364B" fs="35px" fw="700">
							Sign up
						</FirstHeading>
						<Flex width="100%" jc="center">
							<Margin margin="0 10px 0 0">
								<Input
									theme="long"
									placeholder="nickname"
									{...register("nickname", { required: true })}
								/>
							</Margin>
						</Flex>
						{errors.nickname && (
							<Text variant="join-alert-text">닉네임을 입력해주세요</Text>
						)}
						<Flex width="100%" jc="center">
							<Margin margin="0 10px 0 0">
								<Input
									theme="long"
									placeholder="아이디"
									{...register("id", {
										required: true,
										// 영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자
										pattern: /^[A-za-z0-9]{5,15}/g,
									})}
								/>
							</Margin>
						</Flex>
						{errors.id && errors.id.type === "required" && (
							<Text variant="join-alert-text">아이디를 입력해주세요.</Text>
						)}
						{errors.id && errors.id.type === "pattern" && (
							<Text variant="join-alert-text">
								영문자 또는 숫자 5~15자를 입력해주세요.
							</Text>
						)}
						<Input
							theme="long"
							type="password"
							placeholder="비밀번호"
							{...register("password", {
								required: "비밀번호는 필수 입력입니다.",
								// 8 ~ 16자 영문, 숫자 최소 한가지씩 조합
								pattern: /^(?=.*[a-zA-z])(?=.*[0-9]).{8,16}$/,
							})}
						/>
						{errors.password && errors.password.type === "required" && (
							<Text variant="join-alert-text">비밀번호를 입력해주세요.</Text>
						)}
						{errors.password && errors.password.type === "pattern" && (
							<Text variant="join-alert-text">
								8 ~ 16자 영문, 숫자를 입력해주세요.
							</Text>
						)}
						<Input
							theme="long"
							type="password"
							placeholder="비밀번호를 재입력해주세요"
							{...register("password_confirm", {
								required: true,
								validate: value => value === password.current,
							})}
						/>
						{errors.password_confirm &&
							errors.password_confirm.type === "required" && (
								<Text variant="join-alert-text">
									비밀번호를 재입력해주세요.
								</Text>
							)}
						{errors.password_confirm &&
							errors.password_confirm.type === "validate" && (
								<Text variant="join-alert-text">
									비밀번호가 일치하지 않습니다.
								</Text>
							)}
						<Flex>
							<Margin margin="0 25px 0 0">
								<Button
									size="long"
									bgColor="transparent"
									radius="true"
									color="darkPurple"
									fontSize="small"
									border="purple"
									type="button"
									onClick={() => navigate("/")}
								>
									취소
								</Button>
							</Margin>
							<Button
								size="long"
								bgColor="lightPurple"
								radius="true"
								color="white"
								fontSize="small"
								shadow="true"
								type="submit"
							>
								가입하기
							</Button>
						</Flex>
					</Flex>
				</Form>
			</Flex>
			<ToastContainer style={{ width: "400px" }} />
		</>
	);
};

export default SignUpForm;
