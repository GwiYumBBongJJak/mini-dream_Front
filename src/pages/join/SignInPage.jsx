import { SignInForm } from "../../components/join";
import { Button } from "../../common";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<SignInForm />{" "}
			<Button onClick={() => navigate("/join/sign-up")}>회원가입</Button>
		</>
	);
};

export default SignInPage;
