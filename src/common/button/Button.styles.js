import styled from "styled-components";

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
				return `
					width: 110px;
					height: 60px;
				`;
			case "small":
				return `
					width: 110px;
					height: 50px;
				`;
			case "long":
				return `
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
				return `
        background-color: #615668;
        `;
			case "white":
				return `
					background-color: #FFFFFF;
				`;
			case "transparent":
				return `
        background-color: rgba(255, 255, 255, 1);
				`;
			case "semiTransparent":
				return `
        background-color: rgba(255, 255, 255, 0.65);
				`;
			default:
				break;
		}
	}}
		${({ radius }) => {
		switch (radius) {
			case "true":
				return `
			    border-radius: 5px;
			    `;
			default:
				break;
		}
	}}
		${({ color }) => {
		switch (color) {
			case "darkPurple":
				return `
          color: #42364B;      
          `;
			case "lightPurple":
				return `
          color: #877E8D;      
          `;
			case "white":
				return `
            color: #FFFFFF;        
          `;
			default:
				break;
		}
	}}
		${({ shadow }) => {
		switch (shadow) {
			case "true":
				return `
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
          `;
			default:
				break;
		}
	}}
		${({ border }) => {
		switch (border) {
			case "purple":
				return `
        border: 1px solid #42364B;
        `;
			case "white":
				return `
        border: 3px solid #FFFFFF;
        `;
			default:
				break;
		}
	}}
		${({ fontSize }) => {
		switch (fontSize) {
			case "big":
				return `
        font-size: 19px;
        `;
			case "small":
				return `
        font-size: 15px;
        `;
			default:
				break;
		}
	}};
`;
