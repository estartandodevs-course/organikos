import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, #root{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.palettes.white};
    font-family: ${({ theme }) => theme.body.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    font-size: ${({ theme }) => theme.body.fontSizeText};
  }

  ol, ul, li {
	list-style: none;
}
  a {
    text-decoration: none;
    color: inherit;
  }
`;
