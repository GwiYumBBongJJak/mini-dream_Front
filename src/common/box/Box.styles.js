import styled, { css } from "styled-components";

export const Box = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "lending":
				return css`
					width: 540px;
					height: 430px;
				`;
			case "boardItem":
				return css`
					background-color: #e8e8e9;
					width: 260px;
					height: 180px;
				`;
			default:
				break;
		}
	}}
`;
