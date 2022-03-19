let width = document.getElementById("width");
let lineHeight = document.getElementById("lineHeight");
let lineHeightCheck = document.querySelector("input[name=applyLineHeight]");

width.addEventListener("input", async () => {
    let label = document.getElementById("widthLabel");
    label.innerHTML = `width: ${width.value}%`;

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyWidth,
        args: [width.value],
    });
});

lineHeightCheck.addEventListener("change", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (lineHeightCheck.checked) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: applyLineHeight,
            args: [lineHeight.value],
        });
    }
});

lineHeight.addEventListener("input", async () => {
    let label = document.getElementById("lineHeightLabel");
    label.innerHTML = `Line Height: ${lineHeight.value}`;

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (lineHeightCheck.checked) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: applyLineHeight,
            args: [lineHeight.value],
        });
    }
});

function applyWidth(value) {
    document.body.style.maxWidth = `${value}%`;
    document.body.style.margin = "0 auto";
}

function applyLineHeight(value) {
    document.body.style.lineHeight = `${value}`;
}
