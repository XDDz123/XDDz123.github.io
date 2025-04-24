function configureUpdatesCollapse() {
    const updatesCollapseBtn = document.getElementById('updates-collapse-btn');
    const updatesContent = document.getElementById('updates-content');
    const updatesDetails = document.getElementById('updates-details');

    const savedUpdatesState = localStorage.getItem('updatesOpen');
    if (savedUpdatesState === 'true') {
        updatesContent.classList.add('open');
        updatesContent.style.transition = 'none'; // Disable animation
        updatesDetails.style.transition = 'none'; // Disable animation
        setTimeout(() => {
            updatesContent.style.transition = ''; // Re-enable animation
            updatesDetails.style.transition = ''; // Re-enable animation
        }, 0);
    }

    updatesCollapseBtn.addEventListener('click', () => {
        const isOpen = updatesContent.classList.toggle('open');
        localStorage.setItem('updatesOpen', isOpen); // Save the state to localStorage
    });
}
