import styled from "styled-components";
import { css } from "styled-components";

export const Form = styled.form`
	border-radius: 5px;

	${({ theme }) => {
		switch (theme) {
			case "signIn":
				return css`
					width: 538px;
					height: 430px;
					background-color: rgba(255, 255, 255, 0.8);
				`;
			case "signUp":
				return css`
					width: 559px;
					min-height: 560px;
					max-height: 750px%;
					padding: 50px 0;
					background-color: rgba(255, 255, 255, 0.8);
				`;
			default:
				break;
		}
	}};
`;
