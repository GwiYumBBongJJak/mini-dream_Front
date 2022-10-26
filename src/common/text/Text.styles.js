import styled, { css } from "styled-components";

export const Text = styled.p`
	width: ${({ width }) => (width ? width : "")};
	height: ${({ height }) => (height ? height : "")};
	display: ${({ dp }) => (dp ? dp : "")};
	color: ${({ color }) => (color ? color : "")};
	font-size: ${({ fs }) => (fs ? fs : "")};
	font-weight: ${({ fw }) => (fw ? fw : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};
	letter-spacing: ${({ ls }) => (ls ? ls : "")};
	line-height: ${({ lh }) => (lh ? lh : "18px")};
	color: ${({ color }) => (color ? color : "")};
	padding: ${({ pd }) => (pd ? pd : "")}px;

	${({ variant }) => {
		switch (variant) {
			case "join-alert-text":
				return css`
					color: #814e80;
					font-weight: 600;
					font-size: 18px;
					letter-spacing: 0.06em;
					position: relative;
				`;
			default:
				break;
		}
	}}
`;
