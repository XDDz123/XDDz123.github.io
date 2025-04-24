async function loadProjectsJSON(data) {
    // Load JSON data
    // const response = await fetch('static/data_dev/projects.json');
    // const data = (await response.json())[language];

    // Populate page title and back button
    document.querySelector('.page-title').textContent = data.pageTitle;
    document.querySelector('.back-button').innerHTML = data.backButtonText;

    // Populate table headers
    document.querySelector('.table-header-year').textContent = data.tableHeaders.year;
    document.querySelector('.table-header-project-name').textContent = data.tableHeaders.projectName;
    document.querySelector('.table-header-technology-used').textContent = data.tableHeaders.technologyUsed;
    document.querySelector('.table-header-description').textContent = data.tableHeaders.description;

    // Populate project rows
    const tbody = document.querySelector('.project-list tbody');
    tbody.innerHTML = data.projects.map(project => `
        <tr>
            <td class="project-year">${project.year}</td>
            <td class="project-name"><a href="${project.link}" target="_blank">${project.name}</a></td>
            <td class="project-technology">
                ${project.technologies.map(tech => `<span class="technology-item">${tech}</span>`).join('')}
            </td>
            <td class="project-description">${project.description}</td>
        </tr>
    `).join('');
}
