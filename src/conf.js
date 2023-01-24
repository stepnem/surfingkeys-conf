// import theme from "./theme.js"
import keys from "./keys.js"
import searchEngines from "./search-engines.js"

export default {
  // https://github.com/brookhong/Surfingkeys/wiki/Example-Configurations
  settings: {
    clickablePat:             /(https?:\/\/|thunder:\/\/|magnet:)[^<>,'"\s]+/ig,
    defaultSearchEngine:      "dd",
    focusAfterClosed:         "last",
    hintAlign:                "left",
    omnibarSuggestionTimeout: 500,
    pageUrlRegex:             [/(.*?)(\d+)([^0-9]*$)/, /(.*)(\d+)([^.]*?$)/],
    richHintsForKeystroke:    100,
    // this is needed, --disable-smooth-scrolling doesn't suffice
    smoothScroll:             false,
    tabsMRUOrder:             false,
    theme:                    `
      body {
      //   font-family: "DejaVu Sans", DejaVu, Arial, sans-serif;
        font-size: 10pt;
        color: #d7b0ff;
      }

      .sk_theme {
          background: #000;
          color: #d7b0ff;
      }

      .sk_theme .annotation {
        color: #d7b0ff;
      }

      .sk_theme .input {
        color: #d7b0ff;
      }

      #sk_omnibar {
        background: #2a323e !important;
        background-color: #2a323e;
        color: #d7b0ff;
      }

      #sk_omnibar .prompt {
        color: #d7b0ff !important;
      }

      #sk_omnibar input {
        color: #d7b0ff !important;
      }

      #sk_omnibarSearchResult {
        background: #2a323e !important;
      }

      #sk_omnibarSearchResult > ul > li:nth-child(2n+1) {
        background: #222 !important;
      }

      #sk_omnibarSearchResult .url {
        color: #d7b0ff !important;
      }

      #sk_omnibar li.focused, #sk_omnibarSearchResult > ul > li.focused {
        background: #181d24 !important;
        color: #d7b0ff !important;
      }

      #sk_banner,
      #sk_keystroke {
        border: 1px solid #d7b0ff;
        background: #000;
      }

      #sk_keystroke kbd {
        color: #ddd;
        background: #000;
        border: 1px solid #2d0080;
        box-shadow: none;
      }

      #sk_keystroke kbd .candidates {
        color: #ff8cf8;
      }

      /* Disable RichHints CSS animation */
      .expandRichHints {
        animation: 0s ease-in-out 1 forwards expandRichHints;
      }
      .collapseRichHints {
        animation: 0s ease-in-out 1 forwards collapseRichHints;
      }
    `,
  },

  keys,
  searchEngines,

  // Leader for site-specific mappings
  siteleader: "\\",

  // Leader for OmniBar searchEngines
  searchleader: "a",

  // Array containing zero or more log levels to enable: log, warn, error
  logLevels: [
    // "log",
    // "warn",
    "error",
  ],
}
