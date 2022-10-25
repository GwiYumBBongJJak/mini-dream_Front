import { Form, Input, Button, FirstHeading } from "../../common";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { __requestSignIn } from "../../redux/modules/join/joinSlice";

const SignInForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<Form
			onSubmit={handleSubmit(data => {
				const { id, password } = data;
				dispatch(__requestSignIn({ password, username: id }));
				navigate("/board/main");
			})}
		>
			<FirstHeading>LOGIN</FirstHeading>
			<Input
				placeholder="아이디를 입력해주세요"
				{...register("id", { required: true })}
			/>
			{errors.id && errors.id.type === "required" && (
				<p>아이디를 입력해주세요.</p>
			)}
			<Input
				placeholder="비밀번호를 입력해주세요"
				type="password"
				{...register("password", { required: true })}
			/>
			{errors.password && errors.password.type === "required" && (
				<p>비밀번호를 입력해주세요.</p>
			)}
			<Button onClick={() => navigate("/join/sign-up")}>회원가입</Button>
			<Button>로그인</Button>
		</Form>
	);
};

export default SignInForm;
