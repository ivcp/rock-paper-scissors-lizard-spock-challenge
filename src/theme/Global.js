import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: 'Barlow Semi Condensed', sans-serif;
  background: radial-gradient(
    circle at 50% 10%,
    hsl(214, 47%, 23%) 20%,
    hsl(237, 49%, 15%) 100%
  );
  min-height: 100vh;
}

img,
picture {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}


`;
export default GlobalStyle;
