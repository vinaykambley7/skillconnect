document.addEventListener('DOMContentLoaded', function () {
    try {
        // Elements
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Check if elements exist
        if (!hamburger || !navMenu || navLinks.length === 0) {
            console.error('Navbar elements not found');
            return;
        }

        // Toggle menu
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Optional: Prevent body scroll when menu is open
            document.body.style.overflow = 
                navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = ''; // Reset scroll
            });
        });

        // Highlight current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath && currentPage.includes(linkPath)) {
                link.classList.add('current-page');
            }
        });

    } catch (error) {
        console.error('Navbar
