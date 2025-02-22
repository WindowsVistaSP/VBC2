function changeTheme(theme) {
    const themePaths = {
'themeA': 'themeA.css',
'themeB': 'themeB.css',
'themeC': 'themeC.css',
    };
    const themeLink = document.getElementById('theme-link');
    themeLink.href = themePaths[theme];
    document.cookie = `theme=${theme}; path=/; max-age=99999999999999999999`;
}
 

window.onload = function() {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim()).find(cookie => cookie.startsWith('theme='));
    if (cookies) {
        const theme = cookies.split('=')[1];
        changeTheme(theme); 
    } else { 
        changeTheme('themeA'); 
    }
};