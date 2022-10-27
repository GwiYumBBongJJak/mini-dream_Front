import styled, { css } from "styled-components";

export const Box = styled.div`
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	${({ variant }) => {
		switch (variant) {
			case "lending":
				return css`
					width: 470px;
					height: 500px;
					transition: all 2000ms;
					animation: fadein 4s;
					@keyframes fadein {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}
					&:hover {
						transform: translateY(-1%);
					}
				`;
			case "lending-title":
				return css`
					width: 480px;
					color: #ffffff;
					font-size: 36px;
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
					height: 190px;
					border-radius: 5px;
					padding: 25px 30px;
					transition: all 1000ms;
					&:hover {
						transform: translateY(-2%);
					}
				`;
			case "nav-layout":
				return css`
					width: 850px;
				`;
			case "main-list":
				return css`
					width: 800px;
					margin: 0 auto;
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					row-gap: 35px;
					column-gap: 35px;
					justify-items: center;
					justify-content: center;
				`;
			case "edit-box":
				return css`
					/* position: relative; */
				`;
			case "detail":
				return css`
					width: 800px;
					height: 100%;
					margin: 30px auto;
					padding: 60px 80px;
					background-color: rgba(255, 255, 255, 0.9);
					box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
					border-radius: 5px;
				`;
			default:
				break;
		}
	}}
`;
