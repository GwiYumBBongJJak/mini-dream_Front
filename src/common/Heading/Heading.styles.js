import styled, { css } from "styled-components";

export const FirstHeading = styled.h1`
	color: ${({ color }) => (color ? color : "")};
	font-size: ${({ fs }) => (fs ? fs : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};
	letter-spacing: ${({ ls }) => (ls ? ls : "")};
`;
export const SecondHeading = styled.h2`
	color: ${({ color }) => (color ? color : "")};
	font-size: ${({ fs }) => (fs ? fs : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};
	letter-spacing: ${({ ls }) => (ls ? ls : "")};

	${({ variant }) => {
		switch (variant) {
			case "nav-logo":
				return css`
					color: #ffffff;
					font-weight: 700;
					font-size: 24px;
					letter-spacing: 0.1em;
				`;
			default:
				break;
		}
	}}
`;
export const ThirdHeading = styled.h3`
	color: ${({ color }) => (color ? color : "")};
	font-size: ${({ fs }) => (fs ? fs : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};
	letter-spacing: ${({ ls }) => (ls ? ls : "")};
`;
