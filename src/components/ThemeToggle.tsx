
import {useState} from "react";
import '@/style/ThemeToggle.css';
import {useTheme} from "@/hooks";
import {Icon} from "@/components/ui/Icon.tsx";

export function ThemeToggle(){
    const {theme, setTheme} = useTheme();
    const [toggleState, setToggleState] = useState(false);

    const toggleTheme = () => {
        if(setTheme){
            setTheme(toggleState ? 'light' : 'dark');
        }
        setToggleState(!toggleState);
    }

    return (
        <button
            onClick={toggleTheme}
            className="ms-5 w-15 flex items-center justify-center h-6 bg-gray-200 dark:bg-gray-800 rounded-full relative focus:outline-none"
        >
            <span
                className={`absolute left-1 w-6 h-5 bg-gray-500 dark:bg-gray-400 rounded-full transition-transform transform ${
                    theme == 'dark' ? 'translate-x-0' : 'translate-x-12'
                }`}
            />
            <span className=" ms-1 text-gray-600 dark:text-gray-300 absolute left-1">
                <Icon name={'moon'} className="w-4 h-4" />
            </span>
            <span className="me-1 text-gray-600 dark:text-gray-300 absolute right-1">
                <Icon name={'sun'} className="w-4 h-4" />
            </span>
        </button>
    );
}

