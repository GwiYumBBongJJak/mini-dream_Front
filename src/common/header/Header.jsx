import * as styles from "./Header.styles";

const Header = ({ children, ...props }) => {
	return <styles.Header>{children}</styles.Header>;
};

export default Header;
