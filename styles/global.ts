import { createGlobalStyle } from 'styled-components'

export const ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

li {
  display: list-item;
  list-style-type: none;
}

html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}

input::-webkit-placeholder,
textarea::-webkit-placeholder {
  color: ${props => props.theme.text.placeholder};
}

a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
    color: ${(props) => props.theme.text.primary};
    background: ${(props) => props.theme.bg.primary};
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${(props) => props.theme.text.link};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  .scroll-to-top {
    background-color: ${(props) => props.theme.text.link};
    border-radius: 2px;
    position: fixed;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    transition: opacity .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 99999;
  }

  .icon {
    cursor: pointer;
  }

  @keyframes breathe {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 350px 50px;
    }
  }

  @media screen and (min-width: 768px) {
    .footer {
      display: none;
    }
  }
`;

export const MarkdownStyle = createGlobalStyle`
  /* .md {
    --md-bk-color: inherit;
  } */

  .md-dark {
    --md-bk-color: ${(props) => props.theme.bg.secondary};
  }

  .smart-blue-theme {
    background-image: none;
  }

  .smart-blue-theme h1 {
    position: relative;
    text-align: left;
    font-size: 22px;
    margin: 0;
    padding: 15px 0;
  }

  .md-dark .smart-blue-theme {
    background-image: none;
  }

  .md-dark .smart-blue-theme code {
    background-color: ${(props) => props.theme.bg.input};
  }

  .md-dark .smart-blue-theme pre code {
    color: #999;
    background-color: ${(props) => props.theme.bg.primary};
  }

  .comment-list .md-content .md-preview {
    padding: 0;
  }

  .github-theme pre {
    padding: 0;
    background-color: inherit;
  }

  .github-theme p,
  .github-theme blockquote,
  .github-theme ul,
  .github-theme ol,
  .github-theme dl,
  .github-theme table,
  .github-theme pre,
  .github-theme details {
    margin-bottom: 0;
  }

  .github-theme code {
    background-color: inherit;
  }

  .github-theme pre code {
    padding: 0;
  }

  .comment-list .md-content .md-preview,
  .comment-list .md-content .md-html {
    font-size: 12px;
  }
`