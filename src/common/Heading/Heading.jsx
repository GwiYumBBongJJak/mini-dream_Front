import * as styles from "./Heading.styles";

export const FirstHeading = ({ children, ...props }) => {
  return <styles.FirstHeading>{children}</styles.FirstHeading>;
};

export const SecondHeading = ({ children, ...props }) => {
  return <styles.SecondHeading>{children}</styles.SecondHeading>;
};

export const ThirdHeading = ({ children, ...props }) => {
  return <styles.ThirdHeading>{children}</styles.ThirdHeading>;
};
