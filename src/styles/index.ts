import { createGlobalStyle } from 'styled-components';
import * as theme from './selectors';
import { Theme, defaultTheme } from './default.theme';

export { theme, defaultTheme };
export type { Theme };

export const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    @font-face {
        font-family: "Poppins";
        font-weight: 400;
        src: local("Poppins"), url("/fonts/Poppins/Poppins-Regular.ttf") format('truetype');
    }
    @font-face {
        font-family: "Poppins Bold";
        font-weight: 700;
        src: local("Poppins"), url("/fonts/Poppins/Poppins-Bold.tff") format('truetype');
    }
    @font-face {
        font-family: "Poppins_900";
        font-weight: 900;
        src: local("Poppins"), url("/fonts/Poppins/Poppins-ExtraBold.tff") format('truetype');
    }
    @font-face {
        font-family: "Poppins_300";
        font-weight: 300;
        src: local("Poppins"), url("/fonts/Poppins/Poppins-Light.tff") format('truetype');
    }
    @font-face {
        font-family: "Poppins_200";
        font-weight: 200;
        src: local("Poppins"), url("/fonts/Poppins/Poppins-ExtraLight.tff") format('truetype');
    }
    @font-face {
        font-family: "IPoppins_300";
        font-weight: 900;
        font-style: italic;
        src: local("Poppins"), url("/fonts/Poppins/Poppins-LightItalic.ttf") format('truetype');
    }

    html{
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    }
`;
