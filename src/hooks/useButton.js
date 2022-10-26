import { useEffect, useState } from "react";

const useButton = obj => {
	const [activation, setActivation] = useState(false);

	useEffect(() => {
		const check = Object.values(obj).findIndex(value => !value);

		setActivation(check === -1 ? true : false);
	}, [obj]);

	return { activation, setActivation };
};

export default useButton;
