import styled from "styled-components";

export const Input = styled.input`
	border: 1px solid #42364b;
	border-radius: 5px;
	height: 50px;
	font-size: 17px;
	background-color: #ffffff00;

	::placeholder {
		color: #42364b;
		font-size: 17px;
	}

	${({ theme }) => {
		switch (theme) {
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
        width: 650px;
        height: 60px;
        background-color: #FAFAFA
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        `;
			case "comment":
				return `
        width: 600px;
        background-color: #
        `;
			default:
				break;
		}
	}};
`;
