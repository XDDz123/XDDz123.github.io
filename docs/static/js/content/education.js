async function updateLogos() {
    const educationData = globEducation;
    const educationEntries = document.querySelectorAll('.education-entry');

    // check current theme
    const isDark = document.body.classList.contains('dark');
    educationData.entries.forEach((entry, index) => {
            const educationEntry = educationEntries[index];
            educationEntry.querySelector('.college-logo').src = isDark? entry.collegeLogo.src.dark : entry.collegeLogo.src.light;
    });
}

async function populateEducation(educationData) {
    try {
        document.querySelector('.education-section-title').textContent = educationData.sectionTitle;
        document.querySelector('.achievements-title').textContent = educationData.achievementsTitle;

        // fetch template from html with tags
        const educationEntries = document.querySelectorAll('.education-entry');
        const educationEntryTemplate = educationEntries[0].outerHTML;

        // clear container first
        const educationEntriesContainer = document.querySelector('.education-entries');
        educationEntriesContainer.innerHTML = '';

        // add new empty entries to html
        for (let i = 0; i < educationData.entries.length; i++) {
            educationEntriesContainer.innerHTML += educationEntryTemplate;
        }
        // fetch new entries
        const updatedEducationEntries = document.querySelectorAll('.education-entry');

        // check current 
        // updateLogos();

        educationData.entries.forEach((entry, index) => {
            const educationEntry = updatedEducationEntries[index];
            // educationEntry.querySelector('.college-logo').alt = entry.collegeLogo.alt;
            educationEntry.querySelector('.degree-name').textContent = entry.degreeName;
            educationEntry.querySelector('.college-name').textContent = entry.collegeName;
            educationEntry.querySelector('.college-location').textContent = entry.collegeLocation;
            educationEntry.querySelector('.course-list-title').textContent = educationData.courseListTitle;
            const courseSpans = Object.values(entry.courseList).map(course => `<span class="course-item">${course}</span>`).join('');
            educationEntry.querySelector('.course-list').innerHTML = courseSpans;
            const achievementsSpans = Object.values(entry.achievements).map(achievement => `<span class="achievement-item">${achievement}</span>`).join('');
            educationEntry.querySelector('.achievements-list').innerHTML = achievementsSpans;
        });
    }
    catch (error) {
        console.log('Error populating education section:', error);
        window.alert('Education data corrupted:', error);
    }
}
