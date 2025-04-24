function configureSidebarLinks() {
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
    const sections = document.querySelectorAll('section');

    // Highlight active section link in the sidebar
    const highlightActiveLink = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust for header height
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        // Handle the last section explicitly
        const lastSection = sections[sections.length - 1];
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 1) {
            currentSection = lastSection.getAttribute('id');
        }

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };

    // Smooth scrolling for sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 100, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink(); // Call on page load to set the initial active link
}
