import styled from "styled-components";

export const Button = styled.button`
	${({ size }) => {
		switch (size) {
			case "big":
				return `
					width: 110px;
					height: 60px;
				`;
			default:
				break;
		}
	}}
`;
