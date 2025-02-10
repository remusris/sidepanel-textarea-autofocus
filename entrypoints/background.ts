export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  // on installed listener
  chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  });

  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
