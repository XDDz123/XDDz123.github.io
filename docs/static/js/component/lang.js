function configureLangToggle() {
    // Load language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    const langToggle = document.getElementById('lang-toggle');
    langToggle.textContent = savedLanguage.toUpperCase();

    langToggle.addEventListener('click', () => {
        window.alert("Language not implemented (yet).")
        // const currLanguage = localStorage.getItem('language') || 'en';
        // const langToggle = document.getElementById('lang-toggle');
        // const newLanguage = currLanguage === 'en' ? 'zh' : 'en';
        // localStorage.setItem('language', newLanguage);
        // langToggle.textContent = newLanguage.toUpperCase();
        // loadJSON();
    });
}
