import { createGlobalStyle } from 'styled-components/macro'

import RubikRegularTTF from 'assets/fonts/RubikRegular.ttf'
import RubikMediumTTF from 'assets/fonts/RubikMedium.ttf'
import RubikSemiBoldTTF from 'assets/fonts/RubikSemiBold.ttf'
import RubikRegulatWOFF from 'assets/fonts/RubikRegular.woff'

import RobotoRegularTTF from 'assets/fonts/RobotoRegular.ttf'
import RobotoMediumTTF from 'assets/fonts/RobotoMedium.ttf'
import RobotoBoldTTF from 'assets/fonts/RobotoBold.ttf'

import { pxToRem } from 'helpers'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyles = createGlobalStyle<{ theme: any }>`
    @font-face {
        font-family: 'Rubik';
        src: local('Rubik'), url(${RubikRegularTTF}) format('ttf'), url(${RubikRegulatWOFF}) format('woff');
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'Rubik';
        src: local('Rubik'), url(${RubikMediumTTF});
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: 'Rubik';
        src: local('Rubik'), url(${RubikSemiBoldTTF});
        font-style: normal;
        font-weight: 600;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${RobotoRegularTTF});
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${RobotoMediumTTF});
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${RobotoBoldTTF});
        font-style: normal;
        font-weight: 700;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        font-family: 'Rubik';
    }

    html, div, span, applet, object, 
    iframe, h1, h2, h3, h4, h5, h6, p, 
    blockquote, pre, a, abbr, acronym, 
    address, big, cite, code, del, dfn, 
    em, img, ins, kbd, q, s, samp, small, 
    strike, strong, sub, sup, tt, var, b, 
    u, i, center, dl, dt, dd, ol, ul, li, 
    fieldset, form, label, legend, table, 
    caption, tbody, tfoot, thead, tr, th, 
    td, article, aside, canvas, details, 
    embed, figure, figcaption, footer, 
    header, hgroup, menu, nav, output, 
    ruby, section, summary, time, mark, 
    audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
    }

    body {
        width: 100%;
        margin: 0;
        padding: 0;
        color: ${({ theme }): string => theme.textColor};
        font-size: ${({ theme }): string => pxToRem(theme.fontSizes.root)};
        background: ${({ theme }): string => theme.contentBackground};
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    #root {
        display: flex;
        overflow: hidden;
        min-height: 100vh;
    }
`
