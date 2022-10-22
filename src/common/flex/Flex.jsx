import * as styles from "./Flex.styles";

const Flex = props => {
  const { type, color, size, disabled, children, on_click, style } = props;

  const flex_props = {
    color,
    size,
    style,
    disabled,
  };

  return (
    <styles.Flex type={type} onClick={on_click} {...flex_props}>
      {children}
    </styles.Flex>
  );
};

export default Flex;
