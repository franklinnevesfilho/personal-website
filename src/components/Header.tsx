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
                    <div className={`${width > 600 ? 'text-4xl' : 'text-2xl'}`}>
                        HI, I'M
                    </div>
                    <div className={`${width > 600 ? 'text-6xl' : 'text-4xl'}`}>
                        Franklin Neves Filho
                    </div>
                    <div className={`${width > 600 ? 'text-4xl' : 'text-2xl'}`}>
                        and I'm a
                    </div>
                </div>
                <div className="flex justify-start bg-amber-600">
                    <div className={`w-full h-full`}>
                        <Icon
                            className='w-full h-full'
                            name={theme === 'dark' ? 'logoBlack' : 'logoWhite'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
