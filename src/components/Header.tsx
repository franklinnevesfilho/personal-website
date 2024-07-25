import '@/style/Header.css';
import { useTheme, useWindowDimensions } from "@/hooks";
import { Icon } from "@/components/ui/Icon.tsx";
import { Screen } from "@/components/Screen.tsx";

export function Header() {
    const { theme } = useTheme();
    const { width } = useWindowDimensions();

    return (
        <Screen className={''}>
            <div className="w-full p-10 mx-5 rounded-lg">
                <div className="text-center mt-4">
                    <div className={`${width > 600 ? 'text-4xl' : 'text-2xl'}`}>
                        <span className={`ms-2 ${width > 600 ? 'text-6xl' : 'text-4xl'}`}>
                            Franklin Neves Filho
                        </span>
                    </div>
                </div>
                <div className="flex w-full justify-start px-4">
                    <div className="flex justify-center items-center w-full p-2">
                        <Icon
                            className='w-full h-auto object-contain'
                            name={theme === 'dark' ? 'logoBlack' : 'logoWhite'}
                        />
                    </div>
                </div>
            </div>
        </Screen>
    );
}
