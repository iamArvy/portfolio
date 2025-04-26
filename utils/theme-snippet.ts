// utils/theme-snippet.ts

export function getThemeInitScript() {
  return `
    (function () {
      try {
        var appearance = localStorage.getItem('appearance');
        if (!appearance || appearance === 'system') {
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.classList.toggle('dark', prefersDark);
        } else {
          document.documentElement.classList.toggle('dark', appearance === 'dark');
        }
      } catch (e) {}
    })();
  `;
}
