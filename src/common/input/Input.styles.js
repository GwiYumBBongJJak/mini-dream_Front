import styled, { css } from "styled-components";

export const Input = styled.input`
	border: 1px solid #42364b;
	border-radius: 5px;
	height: 50px;
	font-size: 18px;
	background-color: #ffffff00;
	padding: 15px;
	color: #42364b;
	::placeholder {
		color: #534e56;
		font-size: 18px;
	}

	${({ theme }) => {
		switch (theme) {
			case "long":
				return css`
					width: 480px;
				`;
			case "short":
				return css`
					width: 360px;
				`;
			case "post":
				return css`
        width: 650px;
        height: 60px;
        background-color: #FAFAFA
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        `;
			case "comment":
				return css`
					width: 600px;
				`;
			case "edit":
				return css`
					background-color: rgba(255, 255, 255, 0.8);
          width: 645px;
          height: 60px;
          background-color: #FAFAFA
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
          padding: 20px;
				`;

			default:
				break;
		}
	}};
`;
