import styled from "styled-components";

export const Text = styled.p`
	display: ${({ dp }) => (dp ? dp : "")};
	color: ${({ color }) => (color ? color : "")};
	font-size: ${({ fs }) => (fs ? fs : "")};
	font-weight: ${({ fw }) => (fw ? fw : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};
	letter-spacing: ${({ ls }) => (ls ? ls : "")};
	line-height: ${({ lh }) => (lh ? lh : "18px")};
	color: ${({ color }) => (color ? color : "")};
	padding: ${({ pd }) => (pd ? pd : "")}px;
`;
