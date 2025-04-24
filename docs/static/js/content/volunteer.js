async function populateVolunteer(volunteerData) {
    try {
        document.querySelector('.volunteer-section-title').textContent = volunteerData.sectionTitle;

        // fetch template from html with tags
        const volunteerEntries = document.querySelectorAll('.volunteer-entry');
        const wortEntryTemplate = volunteerEntries[0].outerHTML;
        
        // clear container first
        const volunteerEntriesContainer = document.querySelector('.volunteer-entries');
        volunteerEntriesContainer.innerHTML = '';

        // add new empty entries to html
        for (let i = 0; i < volunteerData.entries.length; i++) {
            volunteerEntriesContainer.innerHTML += wortEntryTemplate;
        }
        
        // fetch new entries
        const updatedvolunteerEntries = document.querySelectorAll('.volunteer-entry');
        volunteerData.entries.forEach((entry, index) => {
            const volunteerEntry = updatedvolunteerEntries[index];
            volunteerEntry.querySelector('.volunteer-organization').innerHTML = entry.organization;
            volunteerEntry.querySelector('.volunteer-position').textContent = entry.position;
            volunteerEntry.querySelector('.volunteer-position-title').textContent = volunteerData.positionTitle;
            volunteerEntry.querySelector('.volunteer-location').textContent = entry.location;
            volunteerEntry.querySelector('.volunteer-year').textContent = entry.year;
            volunteerEntry.querySelector('.volunteer-location-title').textContent = volunteerData.locationTitle;
            volunteerEntry.querySelector('.volunteer-year-title').textContent = volunteerData.yearTitle;
            const accomplishments = volunteerEntry.querySelector('.volunteer-accomplishments ul');
            accomplishments.innerHTML = entry.accomplishments.map(accomplishment => `<li>${accomplishment}</li>`).join('');
        });
    }
    catch (error) {
        console.log('Error populating volunteer section:', error);
        window.alert('volunteer data corrupted:', error);
    }
}
