function configureTheme(){
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleHeader = document.getElementById('theme-toggle-header');
    const body = document.body;

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('dark', 'light');
        body.classList.add(savedTheme);
    }

    const updateThemeIcon = () => {
        const isDark = body.classList.contains('dark');
        const icon = isDark ? 'moon.svg' : 'sun.svg';
        const icon_header = isDark ? 'moon.svg' : 'sun-dark.svg';
        themeToggle.innerHTML = `<img src="static/images/${icon}" alt="${isDark ? 'Dark' : 'Light'} Mode" style="width: 20px; height: 20px;">`;
        themeToggleHeader.innerHTML = `<img src="static/images/${icon_header}" alt="${isDark ? 'Dark' : 'Light'} Mode" style="width: 20px; height: 20px;">`;
    };

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
        updateThemeIcon();
        updateIcons();
        switchRenderColor(localStorage.getItem('theme'));

        // updateLogos();
    });

    themeToggleHeader.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
        updateThemeIcon();
        updateIcons();
        switchRenderColor(localStorage.getItem('theme'));
        // updateLogos();
    });

    switchRenderColor(localStorage.getItem('theme'));
    updateThemeIcon(); // Set the initial icon
}


function configureProjectTheme() {
    // Dark/Light toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('dark', 'light');
        body.classList.add(savedTheme);
    }

    const updateThemeIcon = () => {
        const isDark = body.classList.contains('dark');
        const icon = isDark ? 'moon.svg' : 'sun-dark.svg';
        themeToggle.innerHTML = `<img src="static/images/${icon}" alt="${isDark ? 'Dark' : 'Light'} Mode" style="width: 20px; height: 20px;">`;
    };

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
        updateThemeIcon();
    });

    updateThemeIcon(); // Set the initial icon    
}


