import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background: #FBFBFE;
        font-family: "DM Sans", sans-serif;
        color: #252525;
        overflow-x: hidden;

              @media (max-width: 767px) {
                padding-top: 60px;
  }
    }
`;