async function populateConsulting(consultingData) {
    try {
        document.querySelector('.consulting-section-title').textContent = consultingData.sectionTitle;

        // fetch template from html with tags
        const consultingEntries = document.querySelectorAll('.consulting-entry');
        const wortEntryTemplate = consultingEntries[0].outerHTML;
        
        // clear container first
        const consultingEntriesContainer = document.querySelector('.consulting-entries');
        consultingEntriesContainer.innerHTML = '';

        // add new empty entries to html
        for (let i = 0; i < consultingData.entries.length; i++) {
            consultingEntriesContainer.innerHTML += wortEntryTemplate;
        }
        
        // fetch new entries
        const updatedconsultingEntries = document.querySelectorAll('.consulting-entry');
        consultingData.entries.forEach((entry, index) => {
            const consultingEntry = updatedconsultingEntries[index];
            consultingEntry.querySelector('.consulting-activity').innerHTML = entry.activity;
            consultingEntry.querySelector('.consulting-location').textContent = entry.location;
            consultingEntry.querySelector('.consulting-year').textContent = entry.year;
            consultingEntry.querySelector('.consulting-location-title').textContent = consultingData.locationTitle;
            consultingEntry.querySelector('.consulting-year-title').textContent = consultingData.yearTitle;
            const accomplishments = consultingEntry.querySelector('.consulting-accomplishments ul');
            accomplishments.innerHTML = entry.accomplishments.map(accomplishment => `<li>${accomplishment}</li>`).join('');
        });
    }
    catch (error) {
        console.log('Error populating consulting section:', error);
        window.alert('consulting data corrupted:', error);
    }
}
