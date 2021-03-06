import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
    *
    {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colors.defaultTextColor};
        box-sizing: border-box;
        font-family: redwing !important;
    }
    body
    {
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        overflow: hidden;
    }

`