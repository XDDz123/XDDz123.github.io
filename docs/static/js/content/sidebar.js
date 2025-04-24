async function populateSidebar(sidebarData) {
    try {
        linkTexts = document.querySelectorAll('.link-text');
        linkTexts.forEach((linkText, index) => {
            linkText.textContent = sidebarData.links[index].text;
        });
    } catch (error) {
        console.log('Error populating sidebar:', error);
        window.alert('Side bar data corrupted:', error);
    }
}
