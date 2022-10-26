import styled, { css } from "styled-components";

export const Box = styled.div`
	background-color: gray;
	${({ variant }) => {
		switch (variant) {
			case "login":
				return css`
					width: 540px;
					height: 430px;
				`;
			default:
				break;
		}
	}}
`;
