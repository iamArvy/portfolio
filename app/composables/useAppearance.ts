type Appearance = "light" | "dark";

export function updateTheme(value: Appearance | "system") {
  if (typeof window === "undefined") {
    return;
  }

  if (value === "system") {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const systemTheme = mediaQueryList.matches ? "dark" : "light";

    document.documentElement.classList.toggle("dark", systemTheme === "dark");
  } else {
    document.documentElement.classList.toggle("dark", value === "dark");
  }
}

const setCookie = (name: string, value: string, days = 365) => {
  if (typeof document === "undefined") {
    return;
  }

  const maxAge = days * 24 * 60 * 60;

  document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const mediaQuery = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return window.matchMedia("(prefers-color-scheme: dark)");
};

const getStoredAppearance = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem("appearance") as Appearance | null;
};

const handleSystemThemeChange = () => {
  const currentAppearance = getStoredAppearance();
  updateTheme(currentAppearance || "system");
};

export function initializeTheme() {
  if (typeof window === "undefined") {
    return;
  }
  const savedAppearance = getStoredAppearance();
  updateTheme(savedAppearance || "system");
  mediaQuery()?.addEventListener("change", handleSystemThemeChange);
}

// export function currentTheme() {
//   const appearance = useState<"light" | "dark">("appearance", () => {
//     if (typeof window === "undefined") return "light";
//     return document.documentElement.classList.contains("dark")
//       ? "dark"
//       : "light";
//   });
//   const currentTheme = computed(() => appearance.value);
//   if (typeof window === "undefined") {
//     return null;
//   }
//   const isDark = document.documentElement.classList.contains("dark");
//   const appearanceValue = isDark ? "dark" : "light";
//   return appearanceValue;
// }

export function useAppearance() {
  //   const appearance = ref<Appearance>("system");
  const appearance = useState<"light" | "dark">("appearance", () => {
    if (typeof window === "undefined") return "light";
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });
  onMounted(() => {
    initializeTheme();

    const savedAppearance = localStorage.getItem(
      "appearance"
    ) as Appearance | null;

    // appearance.value = savedAppearance || "system";
    if (savedAppearance) {
      appearance.value = savedAppearance;
    }
  });

  function updateAppearance(value: Appearance) {
    appearance.value = value;
    localStorage.setItem("appearance", value);
    setCookie("appearance", value);
    updateTheme(value);
  }

  const currentTheme = computed(() => appearance.value);

  return {
    appearance,
    updateAppearance,
    currentTheme,
  };
}
