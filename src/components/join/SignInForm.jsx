import {
	Form,
	Input,
	Button,
	FirstHeading,
	Flex,
	Text,
	Margin,
	Box,
} from "../../common";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	__requestSignIn,
	setStatusCode,
} from "../../redux/modules/join/joinSlice";

const SignInForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { statusMessage, statusCode } = useSelector(state => state.join);
	console.log("statusCode =>", statusCode, "statusMessage =>", statusMessage);

	useEffect(() => {
		// statusCode 가 202일 경우 회원가입 완료 alert과 함께 navigate하도록
		if (statusCode === 400) {
			alert(statusMessage);
		} else if (statusCode === 1004) {
			dispatch(setStatusCode());
			navigate("/board/main");
		}
	}, [statusMessage, statusCode, dispatch, navigate]);

	return (
		<Form
			theme="signIn"
			onSubmit={handleSubmit(data => {
				const { id, password } = data;
				dispatch(__requestSignIn({ password, username: id }));
			})}
		>
			<Flex fd="column" jc="center" ai="center" height="100%" gap="25px">
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
	);
};

export default SignInForm;
