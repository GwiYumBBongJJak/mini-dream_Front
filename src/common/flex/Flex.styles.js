import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
	gap: 50px;

	${({ align }) => {
		switch (align) {
			case "spaceBetween":
				return `
        justify-content: space-between;
        `;
			case "center":
				return `
          justify-content: center;
        `;
			default:
				break;
		}
	}};
`;
