import { Form, FirstHeading, Input, Button } from "../../common";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
	__requestSignUp,
	__checkIdDuplicate,
	__checkNicknameDuplicate,
} from "../../redux/modules/join/joinSlice";

const SignUpForm = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const nickName = useRef();
	const id = useRef();
	const password = useRef();

	nickName.current = watch("nickname");
	id.current = watch("id");
	password.current = watch("password");

	return (
		<>
			<Form
				onSubmit={handleSubmit(data => {
					const { nickname, id, password } = data;
					console.log(
						"nickname =>",
						nickname,
						"id =>",
						id,
						"password =>",
						password,
					);
					dispatch(__requestSignUp({ nickname, username: id, password }));
					navigate("/");
				})}
			>
				<FirstHeading>Sign up</FirstHeading>
				<Input
					placeholder="nickname"
					{...register("nickname", { required: true })}
				/>
				{errors.nickname && <p>닉네임을 입력해주세요</p>}
				<Button
					onClick={() => dispatch(__checkNicknameDuplicate(nickName.current))}
				>
					중복확인
				</Button>
				<Input
					placeholder="아이디"
					{...register("id", {
						required: true,
						// 영문 대문자 또는 소문자 또는 숫자로 시작하는 아이디, 길이는 5~15자
						pattern: /^[A-za-z0-9]{5,15}/g,
					})}
				/>
				{errors.id && errors.id.type === "required" && (
					<p>아이디를 입력해주세요.</p>
				)}
				{errors.id && errors.id.type === "pattern" && (
					<p>영문자 또는 숫자 5~15자를 입력해주세요.</p>
				)}
				<Button onClick={() => dispatch(__checkIdDuplicate(id.current))}>
					중복확인
				</Button>
				<Input
					type="password"
					placeholder="비밀번호"
					{...register("password", {
						required: "비밀번호는 필수 입력입니다.",
						// 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
						pattern:
							/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
					})}
				/>
				{errors.password && errors.password.type === "required" && (
					<p>비밀번호를 입력해주세요.</p>
				)}
				{errors.password && errors.password.type === "pattern" && (
					<p>8 ~ 16자 영문, 숫자, 특수문자를 입력해주세요.</p>
				)}
				<Input
					type="password"
					placeholder="비밀번호를 재입력해주세요"
					{...register("password_confirm", {
						required: true,
						validate: value => value === password.current,
					})}
				/>
				{errors.password_confirm &&
					errors.password_confirm.type === "required" && (
						<p>비밀번호를 재입력해주세요.</p>
					)}
				{errors.password_confirm &&
					errors.password_confirm.type === "validate" && (
						<p>비밀번호가 일치하지 않습니다.</p>
					)}

				<Button type="button" onClick={() => navigate("/")}>
					취소
				</Button>
				<Button type="submit">가입하기</Button>
			</Form>

			{/* form */}
			<p>react hook form</p>
		</>
	);
};

export default SignUpForm;
