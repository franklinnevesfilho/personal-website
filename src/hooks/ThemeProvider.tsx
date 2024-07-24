import {Theme} from "@/types";
import {createContext, useContext} from "react";
import {useTheme as themeHook} from "./useTheme.ts";

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

function ThemeProvider ({children}: {children: React.ReactNode}){
    const {theme, setTheme} = themeHook();

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(){
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export {ThemeProvider, useTheme}