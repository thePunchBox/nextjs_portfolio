import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Theme = "light" | "dark";

export type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};
