import type { Config } from "tailwindcss";
import nativewind from "nativewind/preset";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [nativewind()],
} satisfies Config;
