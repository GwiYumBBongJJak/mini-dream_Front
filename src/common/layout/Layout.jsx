import * as styles from "./Layout.styles";

const Layout = props => {
  const { type, color, size, disabled, children, on_click, style } = props;

  const layout_props = {
    color,
    size,
    style,
    disabled,
  };

  return (
    <styles.Layout type={type} onClick={on_click} {...layout_props}>
      {children}
    </styles.Layout>
  );
};

export default Layout;
