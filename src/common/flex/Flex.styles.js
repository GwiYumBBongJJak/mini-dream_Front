import styled from "styled-components";
import { css } from "styled-components";

export const Flex = styled.div`
	display: flex;
	flex-direction: ${({ fd }) => (fd ? fd : "row")};
	justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
	align-items: ${({ ai }) => (ai ? ai : "flex-start")};
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
	gap: ${({ gap }) => (gap ? gap : "")};
	background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
	border-radius: ${({ radius }) => (radius ? radius : "")};
	padding: ${({ padding }) => (padding ? padding : "")};
	margin: ${({ margin }) => (margin ? margin : "")};

	${({ variant }) => {
		switch (variant) {
			case "list":
				return css`
					/* margin-top: 40px; */
					justify-content: space-between;
					align-items: center;
					width: 200px;
					height: "30px";
					background-color: "#615668";
				`;
			case "detail":
				return css`
					justify-content: flex-end;
					align-items: center;
					width: 260px;
					height: 30px;
					background-color: #615668;
					border-radius: 20px;
					padding: 20px;
				`;
			case "detailReactions":
				return css`
					justify-content: center;
					align-items: center;
					width: 260px;
					height: 30px;
					background-color: #615668;
					border-radius: 20px;
					padding: 20px;
					margin: 60px auto 40px auto;
				`;
			case "editOrDel":
				return css`
					justify-content: flex-end;
					align-items: center;
					width: 100%;
					height: 30px;
					/* margin: 0 10px; */
				`;
			default:
				break;
		}
	}};
`;
