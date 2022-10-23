import { Link } from "react-router-dom";
import { Button, Input, TextArea } from "../../common";
import useInput from "../../hooks/useInput";

const BoardEditPage = () => {
	const { boardTitle, handleOnChangeTitle } = useInput;
	const { boardBody, handleOnChangeBody } = useInput;

	return (
		<>
			<Link to={-1}>뒤로가기</Link>
			<form>
				<Input
					name="boardTitle"
					value={boardTitle}
					onChange={handleOnChangeTitle}
				/>
				<Button>등록</Button>
				<TextArea
					name="boardBody"
					value={boardBody}
					onChange={handleOnChangeBody}
				/>
			</form>
		</>
	);
};

export default BoardEditPage;
