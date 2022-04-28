import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
        background: var(--primary);
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
        color: var(--black);
    }

    ul {
        list-style: none;
    }

    .iconCss {
        width: 16px;
        height: 16px;
        fill: var(--icon);
        flex-shrink: 0;
    }

    :root {
        --primary: #FFFFFF;
        --black: #1B1F23;
        --gray: #586069;
        --gray-light: #6a737D;
        --gray-dark: #24292E;
        --orange: #F9826C;
        --logo: #FFFFFF;
        --header: #24292E;
        --username: #666666;
        --search: rgba(255, 255, 255, 0.13);
        --search-placeholder: hsla(0, 0%, 100%, .75);
        --icon: #6A737D;
        --link: #0366D6;
        --border: #E1E4E8;
        --ticker: rgba(209,213,218, .5);
 
        --calendar-scale-0: #EBEDF0;
        --calendar-scale-1: #9BE9A8;
        --calendar-scale-2: #3FC463;
        --calendar-scale-3: #30A14E;
        --calendar-scale-4: #216E3A;
        --javascript: #F1E05A;
        --typescript: #2B7489;
        --other-language: #8257E5;
    }
`;