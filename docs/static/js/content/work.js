async function populateWork(workData) {
    try {
        document.querySelector('.work-section-title').textContent = workData.sectionTitle;

        // fetch template from html with tags
        const workEntries = document.querySelectorAll('.work-entry');
        const wortEntryTemplate = workEntries[0].outerHTML;
        
        // clear container first
        const workEntriesContainer = document.querySelector('.work-entries');
        workEntriesContainer.innerHTML = '';

        // add new empty entries to html
        for (let i = 0; i < workData.entries.length; i++) {
            workEntriesContainer.innerHTML += wortEntryTemplate;
        }
        
        // fetch new entries
        const updatedWorkEntries = document.querySelectorAll('.work-entry');
        workData.entries.forEach((entry, index) => {
            const workEntry = updatedWorkEntries[index];
            workEntry.querySelector('.work-company-logo').src = entry.logo;
            workEntry.querySelector('.work-company').innerHTML = entry.company;
            workEntry.querySelector('.work-tags').innerHTML = entry.tags.map(tagText => `<span class="tag">${tagText}</span>`).join('');
            workEntry.querySelector('.work-position').textContent = entry.position;
            workEntry.querySelector('.work-position-title').textContent = workData.positionTitle;
            workEntry.querySelector('.work-location').textContent = entry.location;
            workEntry.querySelector('.work-year').textContent = entry.year;
            workEntry.querySelector('.work-location-title').textContent = workData.locationTitle;
            workEntry.querySelector('.work-year-title').textContent = workData.yearTitle;
            const accomplishments = workEntry.querySelector('.work-accomplishments ul');
            accomplishments.innerHTML = entry.accomplishments.map(accomplishment => `<li>${accomplishment}</li>`).join('');
        });
    }
    catch (error) {
        console.log('Error populating work section:', error);
        window.alert('Work data corrupted:', error);
    }
}
