import { Box, Input, Button, FirstHeading } from "../../common";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
	const navigate = useNavigate();
	return (
		<Box>
			<FirstHeading>LOGIN</FirstHeading>
			<Input placeholder="아이디를 입력해주세요" />
			<Input placeholder="비밀번호를 입력해주세요" />
			<Button onClick={() => navigate("/join/sign-up")}>회원가입</Button>
			<Button>로그인</Button>
		</Box>
	);
};

export default SignInForm;
