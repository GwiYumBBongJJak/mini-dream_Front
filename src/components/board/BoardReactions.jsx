import { Button, Flex, Text } from "../../common";

const BoardReactions = () => {
	return (
		<>
			<Flex jc="space-around" width="100%" ai="center">
				<Button variant="lucky"></Button>
				<Text variant="lucky">34</Text>
				<Button variant="sad"></Button>
				<Text variant="sad">34</Text>
				<Button variant="horror"></Button>
				<Text variant="horror">34</Text>
			</Flex>
		</>
	);
};

export default BoardReactions;
