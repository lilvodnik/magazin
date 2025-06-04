function toggleTopRowTheme(isDark) {
    const topRow = document.querySelector('.top-row');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (isDark) {
        topRow.style.backgroundColor = '#2d2d2d';
        topRow.style.color = '#f8f9fa';
        topRow.style.borderBottom = '1px solid #444';
        themeToggle.style.backgroundColor = '#3a3a3a';
        themeToggle.style.color = '#f0f0f0';
    } else {
        topRow.style.backgroundColor = '#f8f9fa';
        topRow.style.color = '#212529';
        topRow.style.borderBottom = '1px solid #dee2e6';
        themeToggle.style.backgroundColor = '#e9ecef';
        themeToggle.style.color = '#212529';
    }
}

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    toggleTopRowTheme(savedTheme === 'dark');
});