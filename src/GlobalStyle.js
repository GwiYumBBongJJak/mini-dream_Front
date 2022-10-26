import { createGlobalStyle } from "styled-components";
import reset from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* ${reset} */

  * {
    box-sizing: border-box;
  }
  body, div, span, h1, h2, h3, h4, h5, h6,
  p, i, ol, ul, li, form, label, header, nav, 
  input, textarea, button {
	margin: 0;
	padding: 0;
	border: 0;
  font-family: 'Jua', sans-serif;
	resize: none;
  }
  a {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
