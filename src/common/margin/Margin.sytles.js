import styled from "styled-components";

export const Margin = styled.div`
	display: ${({ dp }) => (dp ? dp : "block")};
	margin: ${({ margin }) => (margin ? margin : "")};
`;
