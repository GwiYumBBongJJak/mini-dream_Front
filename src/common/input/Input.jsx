import * as styles from "./Input.styles";

const Input = ({ children, ...props }) => {
	return <styles.Input {...props}>{children}</styles.Input>;
};

export default Input;
