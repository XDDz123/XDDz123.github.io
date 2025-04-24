async function updateIcons() {
    try {
        const iconData = globIcons;

        const iconLinks = document.querySelectorAll('.icon-row a');
        const iconImages = document.querySelectorAll('.icon-row img');

        // check current theme
        const isDark = document.body.classList.contains('dark');
        // update icons
        iconLinks.forEach((link, index) => {
            link.href = iconData[index].link;
            link.title = iconData[index].alt;
            iconImages[index].src = isDark ? iconData[index].src.dark : iconData[index].src.light;
            iconImages[index].alt = iconData[index].alt;
        });
    } catch (error) {
        console.log('Error updating icons:', error);
        window.alert('Icon data corrupted:', error);
    }
}

async function populateIcons(iconData) {
    try {
        // fetch template from html with tags
        const iconLinks = document.querySelectorAll('.icon-row a');
        const iconTemplate = iconLinks[0].outerHTML;

        // clear container first
        const iconContainer = document.querySelector('.icon-row');
        iconContainer.innerHTML = '';

        // add new empty entries to html
        for (let i = 0; i < iconData.length; i++) {                    
            iconContainer.innerHTML += iconTemplate;
        }

        // fetch new entries
        updateIcons(iconData);

        // update links
        const updatedIconLinks = document.querySelectorAll('.icon-row a');
        updatedIconLinks.forEach((link, index) => {
            link.href = iconData[index].link;
        });
    } catch (error) {
        console.log('Error populating icons:', error);
        window.alert('Icon data corrupted:', error);
    }
    
}

async function populateHeader(headerData) {
    try {
        document.querySelector('.profile-picture img').src = headerData.picture;
        document.querySelector('.header-text').textContent = headerData.text;
    } catch (error) {
        console.log('Error populating header:', error);
        window.alert('Header data corrupted:', error);
    }
}