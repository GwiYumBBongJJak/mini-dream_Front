import styled from "styled-components";

export const Input = styled.input`
	border: 1px solid #42364b;
	border-radius: 5px;
	height: 50px;

	${({ size }) => {
		switch (size) {
			case "long":
				return `
        width: 480px;
        `;
			case "short":
				return `
        width: 360px;
        `;
			case "post":
				return `
        650px;
        `;
			case "comment":
				return `
        width: 600px;
        `;
			default:
				break;
		}
	}};
`;
