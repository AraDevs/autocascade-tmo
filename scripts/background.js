chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(tab.url.includes("https://lectortmo.com/viewer/") && tab.url.includes("paginated")){
        chrome.tabs.update(tabId, {url:tab.url.replace("paginated","cascade")});
      }
}); 