export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  // on installed listener
  /* chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  }); */

  chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: false });
  });

  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: false });

  chrome.commands.onCommand.addListener((command) => {
    if (command === "open-popup") {
      chrome.action.openPopup() 
    }
  });
});
