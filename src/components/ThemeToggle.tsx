import {useTheme} from "../../hooks/useTheme.ts";
import {useState} from "react";
import '../../style/ThemeToggle.css';

// type ThemeToggleProps = {
//     activeColor: string;
//     inactiveColor: string;
//     activeIcon: string;
//     inactiveIcon: string;
// }

export function ThemeToggle() {
    const [toggleState, setToggleState] = useState(false);
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setToggleState(!toggleState);
    }

    return (
        <div className="form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleTheme}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {theme}
            </label>
        </div>
    );
}

