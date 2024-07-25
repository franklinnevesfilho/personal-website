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
        </div>
    );
}
