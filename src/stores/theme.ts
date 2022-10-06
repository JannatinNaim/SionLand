import { defineStore } from "pinia";

export const useThemeStore = defineStore("counter", {
  state: () => {
    return { theme: "dark" } as { theme: "light" | "dark" };
  },
  actions: {
    toggleTheme() {
      if (this.theme === "dark") {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
    },
  },
});
