async function populateAbout(aboutData) {
    try {
        document.querySelector('.about-section-title').textContent = aboutData.sectionTitle;
        document.querySelector('.about-text').innerHTML = aboutData.text;
    } catch (error) {
        console.log('Error populating about section:', error);
        window.alert('About data corrupted:', error);
    }
}
