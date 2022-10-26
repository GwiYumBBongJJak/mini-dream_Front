import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-direction: ${({ fd }) => (fd ? fd : "row")};
	justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
	align-items: ${({ ai }) => (ai ? ai : "flex-start")};
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
`;
