import { Box, FirstHeading, Text, Button } from "../../common";
import { useNavigate } from "react-router-dom";

const RendingContent = () => {
	const navigate = useNavigate();
	return (
		<Box>
			<FirstHeading>
				解夢 : <Text>해몽</Text>
			</FirstHeading>
			<Box>
				<Text>
					Dream your dream, 당신의 어젯밤 꿈은 무엇을 알려주고 있을까요?
				</Text>
			</Box>
			<Button
				size="long"
				color="darkPurple"
				bgColor="semiTransparent"
				shadow="true"
				border="white"
				radius="true"
				fontSize="small"
				onClick={() => navigate("/board/main")}
			>
				바로가기
			</Button>
			<Button
				size="long"
				color="darkPurple"
				bgColor="white"
				shadow="true"
				radius="true"
				fontSize="small"
				onClick={() => navigate("join/sign-in")}
			>
				로그인
			</Button>
		</Box>
	);
};

export default RendingContent;
