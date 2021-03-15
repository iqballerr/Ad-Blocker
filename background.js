const defaultFilters = [
  "*://*.zedo.com/*",
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://tpc.googlesyndication.com/*",
  "*://yt3.ggpht.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
  function(details){ return { cancel: true}},
  { urls: defaultFilters },
  ["blocking"]
)