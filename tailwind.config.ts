import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        breathing: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        breathing: "breathing 2s infinite",
      },
      colors: {
        purpleSymply: "#800080",
        purpleColorDegrade: "rgba(145, 2, 145, 0.432)",
      },
    },
  },
  plugins: [],
} satisfies Config;
