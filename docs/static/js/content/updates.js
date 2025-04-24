async function populateUpdates(updateData) {
    try {
        document.querySelector('.updates-section-title').textContent = updateData.sectionTitle;
        const updatesDetails = document.querySelector('#updates-details ul');
        updatesDetails.innerHTML = updateData.details.map(update => `<li>${update}</li>`).join('');

        document.querySelector('.updates-upcoming-title').textContent = updateData.upcomingTitle;
        document.querySelector('.updates-upcoming-text').textContent = updateData.upcomingText;
    } catch (error) {
        console.log('Error populating updates section:', error);
        window.alert('Updates data corrupted:', error);
    }
}
