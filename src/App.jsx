import Router from "./shared/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getJoin } from "./redux/modules/join/joinSlice";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(__getJoin("안녕"));
	}, [dispatch]);

	return (
		<>
			<Router />
		</>
	);
}

export default App;
