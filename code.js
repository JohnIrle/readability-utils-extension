let centerButton = document.getElementById("centerButton")

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
