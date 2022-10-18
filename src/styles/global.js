import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.palettes.white};
    font-family: ${({ theme }) => theme.body.fontFamily};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    font-size: ${({ theme }) => theme.body.fontSizeText};
  }

  ol, ul {
	list-style: none;
}
`;
