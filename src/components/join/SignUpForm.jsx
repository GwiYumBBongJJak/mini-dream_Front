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

	// 닉네임 중복 체크 status code에 따라 에러메세지를 결정 &
	// state 만들어서 아래에 p태그로 띄워준다.
	// 성공이라면 state 만들어서 disable 버튼으로 바꿔준다.
	// 만약 input을 다시 클릭시에는 일반 버튼으로 변경해준다.
	// 둘 모두의 status code가 정상일 경우에만 버튼이 눌릴 수 있도록 처리해준다.
	// 버튼이 눌린 후 navigate

	// 중복 확인 버튼을 눌렀을 때,
	// 1. __checkNicknameDuplicate(nickName.current)로 현재 input의 value를 검사
	// 2. 검사시 동일한 값이 있다면
	// 3. 회원가입 버튼을 누를 수 없도록 함 (경고창과 함께)
	// * 동일한 값이 없을 경우 *
	// 1. 사용할 수 있는 아이디입니다. 라는 컴포넌트가 출력되도록 함
	// 2. 중복 확인 버튼을 누를 수 없도록 함

	return (
		<>
			<Form
				onSubmit={handleSubmit(data => {
					const { nickname, id, password } = data;
					dispatch(__requestSignUp({ nickname, username: id, password }));
					navigate("/join/sign-in");
				})}
			>
				<FirstHeading>Sign up</FirstHeading>
				<Input
					placeholder="nickname"
					{...register("nickname", { required: true })}
				/>
				{errors.nickname && <p>닉네임을 입력해주세요</p>}
				<Button
					size="small"
					bgColor="lightPurple"
					radius="true"
					color="white"
					shadow="true"
					fontSize="small"
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
				<Button
					size="small"
					bgColor="lightPurple"
					radius="true"
					color="white"
					shadow="true"
					fontSize="small"
					onClick={() => dispatch(__checkIdDuplicate(id.current))}
				>
					중복확인
				</Button>
				<Input
					type="password"
					placeholder="비밀번호"
					{...register("password", {
						required: "비밀번호는 필수 입력입니다.",
						// 8 ~ 16자 영문, 숫자 최소 한가지씩 조합
						pattern: /^(?=.*[a-zA-z])(?=.*[0-9]).{8,16}$/,
					})}
				/>
				{errors.password && errors.password.type === "required" && (
					<p>비밀번호를 입력해주세요.</p>
				)}
				{errors.password && errors.password.type === "pattern" && (
					<p>8 ~ 16자 영문, 숫자를 입력해주세요.</p>
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
			</Form>
		</>
	);
};

export default SignUpForm;
