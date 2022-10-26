import styled, { css } from "styled-components";

export const Box = styled.div`
	${({ variant }) => {
		switch (variant) {
			case "lending":
				return css`
					width: 600px;
					height: 650px;
					transition: all 2000ms;
					&:hover {
						transform: translateY(-1%);
					}
				`;
			case "lending-title":
				return css`
					width: 480px;
					color: #ffffff;
					font-size: 42px;
					text-align: center;
					letter-spacing: 0.03em;
					line-height: 1.45;
					p {
						color: #ffffff;
						margin-bottom: -40px;
						font-weight: 600;
					}
				`;
			case "boardItem":
				return css`
					background-color: #e8e8e9;
					width: 260px;
					height: 140px;
					border-radius: 5px;
					padding: 25px 30px;
				`;
			default:
				break;
		}
	}}
`;
