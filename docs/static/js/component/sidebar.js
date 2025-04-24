function configureSidebar() {
    const collapseBtn = document.getElementById('collapse-btn');
    const sidebar = document.getElementById('sidebar');
    collapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        collapseBtn.textContent = sidebar.classList.contains('collapsed') ? "☰" : "✖";
    });
}
