chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("lms.hcmut.edu.vn/course/view.php?id=")) {
        const infoUrl = tab.url.replace("/view.php", "/info.php");
        chrome.tabs.update(tab.id, { url: infoUrl });
    }
});

// Receive message from content script and redirect to teacher profile
chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.type === "redirectToTeachers" && Array.isArray(msg.hrefs)) {
        msg.hrefs.forEach(href => {
            chrome.tabs.create({ url: href });
        });
    }
});
