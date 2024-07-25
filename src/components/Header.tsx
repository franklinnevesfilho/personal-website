import '@/style/Header.css';
import {useTheme, useWindowDimensions} from "@/hooks";
import { Icon } from "@/components/ui/Icon.tsx";

export function Header() {
    const { theme } = useTheme();
    const {width} = useWindowDimensions();

    return (
        <div className={'relative flex flex-col justify-center items-center h-screen'}>
            <div className={`p-10 mx-5 rounded-lg`}>
                <div className="text-center mt-4">
                    <div className={`${width > 600 ? 'text-6xl' : 'text-4xl'}`}>
                        Franklin Neves Filho
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className={`${width > 600 ? 'w-full h-full p-2' : 'w-10/12'}`}>
                        <Icon
                            className='w-full h-full object-fill'
                            name={theme === 'dark' ? 'logoBlack' : 'logoWhite'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
