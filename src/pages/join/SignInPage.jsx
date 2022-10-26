import { SignInForm } from "../../components/join";
import { Button, Flex } from "../../common";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<SignInForm />{" "}
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
		</>
	);
};

export default SignInPage;
