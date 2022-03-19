let centerButton = document.getElementById("centerButton");
let lineHeightButton = document.getElementById("lineHeightButton");

centerButton.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyCentering,
    });
});

lineHeightButton.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyLineHeight,
    });
});

function applyCentering() {
    document.body.style.maxWidth = "75%";
    document.body.style.margin = "0 auto";
}

function applyLineHeight() {
    document.body.style.lineHeight = "1.5";
}
