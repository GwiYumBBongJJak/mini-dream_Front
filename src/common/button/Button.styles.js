import styled, { css } from "styled-components";

export const Button = styled.button`
	font-weight: 600;
	border-radius: 5px;
	border: none;
	background: none;
	&:hover {
		opacity: 0.9;
	}

	${({ size }) => {
		switch (size) {
			case "big":
				return css`
					width: 110px;
					height: 60px;
				`;
			case "small":
				return css`
					width: 110px;
					height: 50px;
				`;
			case "long":
				return css`
					width: 140px;
					height: 50px;
				`;
			default:
				break;
		}
	}}
	${({ bgColor }) => {
		switch (bgColor) {
			case "lightPurple":
				return css`
					background-color: #615668;
				`;
			case "white":
				return css`
					background-color: #ffffff;
				`;
			case "transparent":
				return css`
					background-color: rgba(255, 255, 255, 0.2);
				`;
			case "semiTransparent":
				return css`
					background-color: rgba(255, 255, 255, 0.65);
				`;
			default:
				break;
		}
	}}
		${({ radius }) => {
		switch (radius) {
			case "true":
				return css`
					border-radius: 5px;
				`;
			default:
				break;
		}
	}}
		${({ color }) => {
		switch (color) {
			case "darkPurple":
				return css`
					color: #42364b;
				`;
			case "lightPurple":
				return css`
					color: #877e8d;
				`;
			case "white":
				return css`
					color: #ffffff;
				`;
			default:
				break;
		}
	}}
		${({ shadow }) => {
		switch (shadow) {
			case "true":
				return css`
					box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
				`;
			default:
				break;
		}
	}}
		${({ border }) => {
		switch (border) {
			case "purple":
				return css`
					border: 1px solid #42364b;
				`;
			case "white":
				return css`
					border: 3px solid #ffffff;
				`;
			default:
				break;
		}
	}}

	${({ fontSize }) => {
		switch (fontSize) {
			case "big":
				return css`
					font-size: 19px;
				`;
			case "small":
				return css`
					font-size: 15px;
					width: 100%;
				`;
			default:
				break;
		}
	}};
	${({ variant }) => {
		switch (variant) {
			case "back-button":
				return css`
					/* position: absolute;
					top: 26px;
					left: 306px; */
					width: 70px;
					font-size: 17px;
				`;
			case "lucky":
				return css`
					background-image: url("/images/lucky.png");
					background-size: cover;
					width: 23px;
					height: 23px;
				`;
			case "sad":
				return css`
					background-image: url("/images/sad.png");
					background-size: cover;
					width: 23px;
					height: 23px;
				`;
			case "horror":
				return css`
					background-image: url("/images/horror.png");
					background-size: cover;
					width: 23px;
					height: 23px;
				`;
			case "commentEdit":
				return css`
					color: #877e8d;
				`;
			case "commentDel":
				return css`
					color: #42364b;
				`;
			case "detail-button":
				return css`
					color: #816299;
					font-size: 17px;
				`;
			default:
				break;
		}
	}};
`;
