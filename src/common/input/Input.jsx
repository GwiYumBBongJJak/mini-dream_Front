import * as styles from "./Input.styles";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
	return <styles.Input {...props} ref={ref} />;
});

export default Input;
