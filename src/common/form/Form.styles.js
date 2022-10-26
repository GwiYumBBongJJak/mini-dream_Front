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
					margin: 340px auto;
					background-color: rgba(255, 255, 255, 0.8);
				`;
			case "signUp":
				return css`
					width: 559px;
					height: 557px;
					margin: 340px auto;
					background-color: rgba(255, 255, 255, 0.8);
				`;
			default:
				break;
		}
	}};
`;
