
import '@/style/ThemeToggle.css';
import {useTheme} from "@/hooks";
import {Icon} from "@/components/ui/Icon.tsx";

interface ThemeToggleProps {
    height?: number;
    width?: number;
    knobWidth?: number;
    knobHeight?: number;
    translationX?: number;
}

export function ThemeToggle({height = 30, width = 80, knobWidth = 25, knobHeight = 25, translationX=45}: ThemeToggleProps) {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const toggleWidth = `${width}px`;
    const toggleHeight = `${height}px`;
    const knobWidthValue = `${knobWidth}px`;
    const knobHeightValue = `${knobHeight}px`;

    return (
        <button
            style={{width: toggleWidth, height: toggleHeight}}
            onClick={toggleTheme}
            className={`ms-5 flex items-center justify-center bg-gray-200 dark:bg-neutral-600 rounded-full relative focus:outline-none`}
        >
            <span
                style={{
                    width: knobWidthValue,
                    height: knobHeightValue,
                    transform: `translateX(${theme != 'dark' ? `${translationX}px` : '0'})`,
                }}
                className={`absolute left-1 bg-gray-500 dark:bg-gray-400 rounded-full transition-transform transform ${
                    theme == 'dark' ? 'translate-x-0' : 'translate-x-12'
                }`}
            />
            <span className=" ms-1 text-gray-600 dark:text-gray-300 absolute left-1">
                <Icon name={'moon'} style={{
                    width: knobWidth-10,
                }} />
            </span>
            <span className="me-1 text-gray-600 dark:text-gray-300 absolute right-1">
                <Icon name={'sun'} style={{
                    width: knobWidth-10,
                }} />
            </span>
        </button>
    );
}

