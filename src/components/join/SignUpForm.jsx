import { Box, FirstHeading, Input, Button } from "../../common";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
	const navigate = useNavigate();

	return (
		<Box>
			<FirstHeading>Sign up</FirstHeading>
			<Input placeholder="nickname" />
			<Button>중복확인</Button>
			<Input placeholder="아이디를 입력해주세요" />
			<Button>중복확인</Button>
			<Input placeholder="비밀번호를 입력해주세요" />
			<Input placeholder="비밀번호를 재입력해주세요" />
			<Button onClick={() => navigate("/")}>취소</Button>
			<Button>가입하기</Button>
		</Box>
	);
};

export default SignUpForm;
