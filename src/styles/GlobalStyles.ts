import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    font-size: 62.5%;
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --primary: #11101d;
    --green: #27AE60;
    --red: #FF1717;
    --darkGray: #525C67;
    --gray: #ededed;
    --white: #FFFFFF;
    --gray: #8C8C8C;
    --transparent: #1d1b31;
    --border: #999999;
  }
`;
