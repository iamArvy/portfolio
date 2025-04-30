export default defineAppConfig({
  appName: "Oluwaseyi Oke",
  defaultLayout: () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("layout") || "topbar";
      return "dashboard-" + saved;
    }
    return "dashboard-topbar";
  },
});
