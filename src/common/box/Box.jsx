import * as styles from "./Box.styles";

const Box = props => {
  const { type, color, size, disabled, children, on_click, style } = props;

  const box_props = {
    color,
    size,
    style,
    disabled,
  };

  return (
    <styles.Box type={type} onClick={on_click} {...box_props}>
      {children}
    </styles.Box>
  );
};

export default Box;
