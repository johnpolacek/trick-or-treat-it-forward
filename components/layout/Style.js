/** @jsx jsx */
import { jsx } from "theme-ui"
import theme from "../theme"

const Style = (props) => (
  <style jsx global>{`
    button,
    hr,
    input {
      overflow: visible;
    }
    progress,
    sub,
    sup {
      vertical-align: baseline;
    }
    [type="checkbox"],
    [type="radio"],
    legend {
      box-sizing: border-box;
      padding: 0;
    }
    html {
      line-height: 1.2;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes[1]}px;
      background: linear-gradient(
        0deg,
        rgba(255, 154, 0, 1) 50%,
        rgba(247, 95, 28, 1) 100%
      );
    }
    hr {
      box-sizing: content-box;
      height: 0;
    }
    a {
      font-weight: bold;
      color: black;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: bolder;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button,
    select {
      text-transform: none;
    }
    [type="button"],
    [type="reset"],
    [type="submit"],
    button {
      -webkit-appearance: button;
      padding: 16px 8px;
    }
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring,
    button:-moz-focusring {
      outline: ButtonText dotted 1px;
    }
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    legend {
      color: inherit;
      display: table;
      max-width: 100%;
      white-space: normal;
    }
    textarea {
      overflow: auto;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    [type="search"] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    details {
      display: block;
    }
    summary {
      display: list-item;
    }
    [hidden],
    template {
      display: none;
    }
    html {
      box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      min-height: 100vh;
      height: 100%;
    }
    button,
    input[type="submit"] {
      cursor: pointer;
      background: ${theme.colors.primary};
      color: white;
      border-radius: 4px;
      border: none;
    }
    p {
      line-height: 1.5;
      padding: 0 0 16px;
    }
    ul {
      margin-top: 0;
    }
    select {
      padding: 8px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-rendering: optimizelegibility;
      line-height: 1;
      margin: 0 0 16px;
      font-family: ${theme.fonts.heading};
    }
    input,
    select,
    textarea {
      font-size: 16px;
      font-family: inherit;
    }
    select {
      -webkit-appearance: menulist;
    }
    table {
      border-collapse: collapse;
    }
    input {
      text-align: inherit;
      padding-left: 4px;
    }
    #docs h2 {
      padding-top: 32px;
    }
  `}</style>
)

export default Style
