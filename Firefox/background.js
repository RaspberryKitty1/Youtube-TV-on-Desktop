// Define the Nintendo Switch User-Agent string
const switchUserAgent = "Mozilla/5.0 (Nintendo Switch; WebApplet) AppleWebKit/609.4 (KHTML, like Gecko) NF/6.0.2.20.5 NintendoBrowser/5.1.0.22023 Dalvik/2.1.0 (Linux; U; Android 5.1.1; AEOBC Build/LVY48f)";

// Listen for requests to YouTube and modify the User-Agent
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    // Modify headers only if the URL is going to youtube.com
    for (let header of details.requestHeaders) {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = switchUserAgent;
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["*://www.youtube.com/tv*"] },
  ["blocking", "requestHeaders"]
);

// Redirect any youtube.com URLs to youtube.com/tv# if not already there
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.startsWith("https://www.youtube.com/tv") && !details.url.includes("/tv#")) {
      return { redirectUrl: "https://www.youtube.com/tv#" };
    }
  },
  { urls: ["*://www.youtube.com/tv*"], types: ["main_frame"] },
  ["blocking"]
);
