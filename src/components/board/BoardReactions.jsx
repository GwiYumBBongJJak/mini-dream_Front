import { Button, Flex, Text } from "../../common";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __updateReactions } from "../../redux/modules/board/boardSlice";

const BoardReactions = ({ boardId }) => {
	const dispatch = useDispatch();
	// 리액션 클릭시 dispatch 호출 핸들러
	const handleSendReaction = e => {
		const reactonInfo = { boardId, action: e.target.value };
		dispatch(__updateReactions(reactonInfo));
	};
	// Redux store data => reactions state
	const { reactions } = useSelector(state => state.board);
	console.log("reactons =>", reactions);

	// Reaction state
	const [reaction, setReaction] = useState({
		likeCount: 0,
		dislikeCount: 0,
		horrorCount: 0,
	});

	// 리액션 dispatch 응답 결과 감지
	useEffect(() => {
		if (reactions) {
			setReaction(prevState => {
				return {
					...prevState,
					...reactions,
				};
			});
		}
	}, [reactions]);
	return (
		<>
			<Flex jc="space-around" width="100%" ai="center">
				<Button
					value="LIKE"
					onClick={handleSendReaction}
					aria-label="lucky"
					variant="lucky"
				></Button>
				<Text variant="lucky">{reaction.likeCount}</Text>
				<Button
					value="DISLIKE"
					onClick={handleSendReaction}
					aria-label="sad"
					variant="sad"
				></Button>
				<Text variant="sad">{reaction.dislikeCount}</Text>
				<Button
					value="HORROR"
					onClick={handleSendReaction}
					aria-label="horror"
					variant="horror"
				></Button>
				<Text variant="horror">{reaction.horrorCount}</Text>
			</Flex>
		</>
	);
};

export default BoardReactions;
