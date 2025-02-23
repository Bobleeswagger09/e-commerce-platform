import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "#f6f6f6",
        primary: "#f4aa3a",
        darkPrimary: "#fab627",
        darkMode: "#171717",

        secondary: "#18161b",
        accent: "#1be885",
        neutral: "#272136",
        info: "#778ad4",
        success: "#23b893",
        warning: "#f79926",
        error: "#ea535a",
      },
    },
  },
  plugins: [],
} satisfies Config;
