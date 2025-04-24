async function populateResearch(researchData) {
    try {
        document.querySelector('.research-section-title').textContent = researchData.sectionTitle;
        document.querySelector('.projects-research-subsection-title').textContent = researchData.projectsSubsectionTitle;

        // fetch template from html with tags
        const researchTiles = document.querySelectorAll('.research-tile');
        const researchTileTemplate = researchTiles[0].outerHTML;
        // clear container first
        const researchTilesContainer = document.querySelector('.research-tiles');
        researchTilesContainer.innerHTML = '';
        // add new empty entries to html
        for (let i = 0; i < researchData.projects.length; i++) {
            researchTilesContainer.innerHTML += researchTileTemplate;
        }
        // fetch new entries
        const researchTitles = document.querySelectorAll('.research-project-title');
        const researchAccomplishments = document.querySelectorAll('.research-project-accomplishments ul');
        const researchSubTitles = document.querySelectorAll('.research-sub-title');
        const researchTags = document.querySelectorAll('.research-tags');
        
        researchTitles.forEach((title, index) => {
            title.textContent = researchData.projects[index].title;
        });
        researchAccomplishments.forEach((ul, index) => {
            ul.innerHTML = researchData.projects[index].accomplishments.map(accomplishment => `<li>${accomplishment}</li>`).join('');
        });
        researchSubTitles.forEach((subTitle, index) => {
            subTitle.textContent = researchData.projects[index].subTitle;
        });
        researchTags.forEach((tag, index) => {
            tag.innerHTML = researchData.projects[index].tags.map(tagText => `<span class="tag">${tagText}</span>`).join('');
        });

        document.querySelector('.publications-research-subsection-title').textContent = researchData.publicationsSubsectionTitle;
        const publicationsContent = document.querySelector('.publications-content');
        publicationsContent.innerHTML = researchData.publications.map(publication => `<p>${publication}</p>`).join('');
    }
    catch (error) {
        console.log('Error populating research section:', error);
        window.alert('Research data corrupted:', error);
    }
}
