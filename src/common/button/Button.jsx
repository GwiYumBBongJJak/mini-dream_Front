import * as styles from "./Button.styles";

const Button = props => {
  const { type, color, size, disabled, children, on_click, style } = props;

  const button_props = {
    color,
    size,
    style,
    disabled,
  };

  return (
    <styles.Button type={type} onClick={on_click} {...button_props}>
      {children}
    </styles.Button>
  );
};

export default Button;
