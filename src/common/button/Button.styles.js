import styled from "styled-components";

export const Button = styled.button`
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
			case "purple":
				return `
          color: #42364B;      
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
`;
