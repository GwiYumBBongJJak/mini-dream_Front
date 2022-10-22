import * as styles from "./Text.styles";

const Text = ({ children, ...props }) => {
  return <styles.Text>{children}</styles.Text>;
};

export default Text;
