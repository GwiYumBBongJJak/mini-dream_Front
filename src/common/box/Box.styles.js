import styled, { css } from "styled-components";

export const Box = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "lending":
				return css`
					width: 540px;
					height: 430px;
				`;
			default:
				break;
		}
	}}
`;
