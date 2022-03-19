let centerButton = document.getElementById("centerButton");
let lineHeightButton = document.getElementById("lineHeightButton");
let lineHeight = document.getElementById("lineHeight")
let lineHeightCheck = document.querySelector("input[name=applyLineHeight]");

lineHeightCheck.addEventListener("change", async () => {
    let label = document.getElementById("lineHeightLabel");
    label.innerHTML = `Line Height: ${lineHeight.value}`;

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if(lineHeightCheck.checked) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: applyLineHeight,
            args: [lineHeight.value]
        });
    }
})

lineHeight.addEventListener("input", async () => {
    let label = document.getElementById("lineHeightLabel");
    label.innerHTML = `Line Height: ${lineHeight.value}`;

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if(lineHeightCheck.checked) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: applyLineHeight,
            args: [lineHeight.value]
        });
    }
})

centerButton.addEventListener("click", async() => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyCentering,
    });
});

function applyCentering() {
    document.body.style.maxWidth = "75%";
    document.body.style.margin = "0 auto";
}

function applyLineHeight(value) {
    document.body.style.lineHeight = `${value}`;
}