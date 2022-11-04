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
  min-height: 100vh;
  background: hsl(214, 47%, 23%);     
  background-image: url(${props => (props.bgImage ? null : props.shape)}), 
  radial-gradient(
    circle at 50% 10%,
    hsl(214, 47%, 23%) 20%,
    hsl(237, 49%, 15%) 100%
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%, 100%;  

  @media (min-width: 37.5em){
  & {
    background-size: 30rem, 100%;  
  }
}
}

main {
  display: flex;  
  flex-direction: ${props => (props.bgImage ? 'column' : 'row')};
  justify-content: ${props => (props.bgImage ? 'flex-start' : 'center')};
    align-items: center;
  height: calc(100vh - 12rem);   
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
