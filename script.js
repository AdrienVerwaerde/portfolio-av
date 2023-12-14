function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



function toggleLanguage(lang) {
    const flags = document.querySelectorAll('#language-toggle button img');
    document.addEventListener('DOMContentLoaded', () => {
        const currentLanguage = localStorage.getItem('language') || 'en';
        toggleLanguage(currentLanguage);
    });
    
    flags.forEach(flag => flag.parentNode.classList.remove('active'));
    document.getElementById(`flag-${lang}`).classList.add('active');

    // Change the language by redirecting to the corresponding HTML file
    if (lang === 'en') {
        window.location.href = 'index-eng.html';
    } else if (lang === 'fr') {
        window.location.href = 'index.html';
    }

    // Save the selected language in localStorage
    localStorage.setItem('language', lang);
}

function navigateToSection(sectionId) {
    const currentPath = window.location.pathname;
    const currentHtml = window.location.href.includes('index-eng.html') ? 'index-eng.html' : 'index.html';
    const targetPage = currentPath.replace(`/${currentHtml}`, '') + `/${currentHtml}${sectionId}`;
    window.location.href = targetPage;
}

