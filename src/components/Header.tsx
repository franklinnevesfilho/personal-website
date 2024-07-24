import '@/style/Header.css';
import {useTheme} from "@/hooks";
import { Icon } from "@/components/ui/Icon.tsx";

export function Header() {
    const {theme} = useTheme();

    return (
        <div className='header row'>
            <div className="absolute top-1/4 left-1/4">
                <h1 className={'text-4xl'}>Franklin Neves Filho</h1>
            </div>
            <div className="header-img-container">
                <Icon className={'header-img'} name={theme == 'dark'? 'logoBlack' : 'logoWhite'}/>
            </div>
            <div className={`absolute top-1/2 right-10 border-2 p-3 rounded-2xl ${theme== 'dark' ? 'border-white': 'border-neutral-800'}`}>
                <div className="resume-link">
                    <a href="" target="_blank" rel="noreferrer">
                        <button className="btn">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
