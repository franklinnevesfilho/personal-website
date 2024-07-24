import { useEffect, useState } from "react";
import { Theme } from "../types";

export const useTheme = () => {
    const getMatchMedia = () => window.matchMedia('(prefers-color-scheme: dark)');

    const getInitialTheme = (): Theme => {
        const storedTheme = localStorage.getItem('theme') as Theme;
        return storedTheme || (getMatchMedia().matches ? 'dark' : 'light');
    };

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    const updateTheme = (newTheme: Theme) => {
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        const matchMedia = getMatchMedia();
        const applyTheme = (theme: Theme) => {
            document.body.classList.remove('light', 'dark');
            document.body.classList.add(theme);
        };

        applyTheme(theme);

        const mqListener = (e: MediaQueryListEvent) => {
            if (localStorage.getItem('theme') === null) { // Only update if theme is not set in localStorage
                const newTheme = e.matches ? 'dark' : 'light';
                updateTheme(newTheme);
                applyTheme(newTheme);
            }
        };

        matchMedia.addEventListener('change', mqListener);
        return () => matchMedia.removeEventListener('change', mqListener);
    }, [theme]);

    return { theme, setTheme: updateTheme };
}
