async function populateProjects(projectData) {
    try {
        document.querySelector('.view-all-button-text').textContent = projectData.viewAllButtonText;
        document.querySelector('.projects-section-title').textContent = projectData.sectionTitle;

        // fetch template from html with tags
        const projectTiles = document.querySelectorAll('.tile');
        const projectTileTemplate = projectTiles[0].innerHTML;

        // clear container first
        const projectTilesContainer = document.querySelector('.tiles');
        projectTilesContainer.innerHTML = '';

        // add new empty entries to html
        for (let i = 0; i < projectData.projects.length; i++) {
            // create new div
            const newTile = document.createElement('div');
            newTile.className = 'tile';
            newTile.dataset.title = projectData.projects[i].dataTitle;
            newTile.title = "click for more information";
            newTile.innerHTML = projectTileTemplate;
            projectTilesContainer.appendChild(newTile);
        }

        const projectTitles = document.querySelectorAll('.personal-project-title');
        const projectDescriptions = document.querySelectorAll('.personal-project-description');
        const projectSplashArts = document.querySelectorAll('.project-splash-art');
        projectSplashArts.forEach((splashArt, index) => {
            splashArt.src = projectData.projects[index].splashArt.src;
            splashArt.alt = projectData.projects[index].splashArt.alt;
        });
        projectTitles.forEach((title, index) => {
            title.textContent = projectData.projects[index].title;
        });
        projectDescriptions.forEach((description, index) => {
            description.innerHTML = projectData.projects[index].description;
        });
    } catch (error) {
        console.log('Error populating projects section:', error);
        window.alert('Project data corrupted:', error);
    }
}

