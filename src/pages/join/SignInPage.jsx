import { SignInForm } from "../../components/join";
import { Button, Flex } from "../../common";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<Flex jc="center" ai="center">
				<SignInForm />
			</Flex>
		</>
	);
};

export default SignInPage;
