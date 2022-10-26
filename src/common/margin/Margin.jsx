import * as styles from "./Margin.sytles";

const Margin = ({ children, ...props }) => {
	return <styles.Margin {...props}>{children}</styles.Margin>;
};

export default Margin;
