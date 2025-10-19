document.querySelectorAll('.nav-link').forEach(link => {
    if (window.location.pathname === link.pathname) {
        link.classList.add('nav-link-active');
    } else {
        link.classList.remove('nav-link-active');
    }
});

document.querySelectorAll('.nav-link-footer').forEach(link => {
    if (window.location.pathname === link.pathname) {
        link.classList.add('nav-link-footer-active');
    } else {
        link.classList.remove('nav-link-footer-active');
    }
});