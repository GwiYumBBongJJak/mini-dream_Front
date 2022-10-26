import { Box, FirstHeading, Text, Button, Flex, Margin } from "../../common";
import { useNavigate } from "react-router-dom";

const RendingContent = () => {
	const navigate = useNavigate();
	return (
		<Flex jc="center" ai="center" width="100%" height="100%">
			<Box variant={"lending"}>
				<Flex fd="column" jc="center" ai="center" width="100%" height="100%">
					<FirstHeading color="#ffffff" fs="90px" ls="0.em">
						解夢 :
						<Margin dp="inline-block" margin="0 0 10px 10px">
							<Text
								fw="700"
								fs="40px"
								dp="inline-block"
								color="#ffffff"
								ls="0.1em"
							>
								해몽
							</Text>
						</Margin>
					</FirstHeading>
					<Box>
						<Text>
							Dream your dream, 당신의 어젯밤 꿈은 무엇을 알려주고 있을까요?
						</Text>
					</Box>
					<Flex jc="center" ai="center">
						<Margin>
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
						</Margin>
						<Margin>
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
						</Margin>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};

export default RendingContent;
