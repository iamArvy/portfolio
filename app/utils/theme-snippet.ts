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

// utils/layout-snippet.ts
// export function getLayoutInitScript() {
//   return `
//     try {
//       const savedLayout = localStorage.getItem("layout") || "topbar";
//       window.__NUXT__layout = "dashboard-" + savedLayout;
//     } catch (e) {}
//   `;
// }
