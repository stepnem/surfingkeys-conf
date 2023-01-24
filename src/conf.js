import theme from "./theme.js"
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
    theme,
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
