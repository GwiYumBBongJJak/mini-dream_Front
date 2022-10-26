import styled, { css } from "styled-components";

export const FirstHeading = styled.h1`
	color: ${({ color }) => (color ? color : "")};
	font-size: ${({ fs }) => (fs ? fs : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};
	letter-spacing: ${({ ls }) => (ls ? ls : "")};
	font-weight: ${({ fw }) => (fw ? fw : "")};
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
					cursor: pointer;
				`;
			default:
				break;
		}
	}}
`;
export const ThirdHeading = styled.h3`
	font-weight: 600;
	margin-bottom: 10px;
	color: ${({ color }) => (color ? color : "")};
	font-size: ${({ fs }) => (fs ? fs : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};
	letter-spacing: ${({ ls }) => (ls ? ls : "")};
`;
