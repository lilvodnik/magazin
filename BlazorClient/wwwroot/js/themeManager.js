window.themeManager = {
    init: function (dotNetRef) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme(savedTheme === 'dark');
        dotNetRef.invokeMethodAsync('SetTheme', savedTheme === 'dark');
        
        document.body.classList.add('theme-transition');
    },

    toggleTheme: function (isDark) {
        this.applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    },

    applyTheme: function (isDark) {
        const html = document.documentElement;
        html.setAttribute('data-theme', isDark ? 'dark' : 'light');
        
        setTimeout(() => {
            html.classList.add('theme-transition');
        }, 10);
    }
};