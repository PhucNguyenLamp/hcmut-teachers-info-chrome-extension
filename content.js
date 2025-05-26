const teacherLinks = Array.from(document.querySelectorAll(".teachers li a"))
    .map(a => a.href)
    .filter(Boolean);

if (teacherLinks.length > 0) {
    chrome.runtime.sendMessage({
        type: "redirectToTeachers",
        hrefs: teacherLinks
    });
}
