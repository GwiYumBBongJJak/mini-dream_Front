import { Box, FirstHeading, Text, Button, Flex, Margin } from "../../common";
import { useNavigate } from "react-router-dom";

const RendingContent = () => {
	const navigate = useNavigate();
	return (
		<Flex jc="center" ai="center" width="100%" height="100%">
			<Flex fd="column" jc="center" ai="center" width="100%" height="100%">
				<Box variant={"lending"}>
					<Margin margin="0 0 50px 20px">
						<FirstHeading color="#ffffff" fs="105px" ls="0.1em" ta="center">
							解夢:
							<Margin dp="inline-block" margin="0 0 10px 20px">
								<Text
									fw="600"
									fs="48px"
									dp="inline-block"
									color="#ffffff"
									ls="0.2em"
								>
									해몽
								</Text>
							</Margin>
						</FirstHeading>
					</Margin>
					<Box variant={"lending-title"}>
						<Flex fd="column" ai="center">
							<Text>Commit Your Dream,</Text> <br />
							당신의 어젯밤 꿈은 <br />
							무엇을 알려주고 있을까요?
						</Flex>
					</Box>
					<Margin margin="70px 0 0 0">
						<Flex jc="center" ai="center">
							<Margin margin="0 45px 0 0">
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
					</Margin>
				</Box>
			</Flex>
		</Flex>
	);
};

export default RendingContent;
