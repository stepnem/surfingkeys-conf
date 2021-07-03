const util = require("./util")
const keys = require("./keys")
const completions = require("./completions")

// ---- Settings ----//
// https://github.com/brookhong/Surfingkeys/wiki/Example-Configurations
util.addSettings({
  clickablePat:             /(https?:\/\/|thunder:\/\/|magnet:)[^<>,'"\s]+/ig,
  pageUrlRegex:             [/(.*?)(\d+)([^0-9]*$)/, /(.*)(\d+)([^.]*?$)/],
  hintAlign:                "left",
  omnibarSuggestionTimeout: 500,
  richHintsForKeystroke:    200,
  theme:                    `
    /* Disable RichHints CSS animation */
    .expandRichHints {
        animation: 0s ease-in-out 1 forwards expandRichHints;
    }
    .collapseRichHints {
        animation: 0s ease-in-out 1 forwards collapseRichHints;
    }
  `,
  // this is needed, --disable-smooth-scrolling doesn't suffice
  smoothScroll:        false,
  focusAfterClosed:    "last",
  tabsMRUOrder:        false,
  defaultSearchEngine: "sp",
})

if (typeof Hints !== "undefined") {
  Hints.characters = "qwertasdfgzxcvb"
}

if (document.origin === "https://www.google.com") {
  settings.smartPageBoundary = true
}

// Leader for site-specific mappings
const siteleader = "\\"

// Leader for OmniBar searchEngines
const searchleader = "a"

// Process mappings and completions
// See ./keys.js and ./completions.js
// util.rmMaps(keys.unmaps.mappings)
// util.rmSearchAliases(keys.unmaps.searchAliases)
util.processMaps(keys.maps, keys.aliases, siteleader)
util.processCompletions(completions, searchleader)

module.exports = { siteleader, searchleader }
