import { Button, Flex, Text } from "../../common";

const BoardReactions = () => {
	return (
		<Flex
			jc="space-between"
			ai="center"
			width="260px"
			height="30px"
			bgColor="#615668"
			radius="20px"
			padding="20px"
		>
			<Button variant="lucky"></Button>
			<Text variant="lucky">34</Text>
			<Button variant="sad"></Button>
			<Text variant="sad">34</Text>
			<Button variant="horror"></Button>
			<Text variant="horror">34</Text>
		</Flex>
	);
};

export default BoardReactions;
