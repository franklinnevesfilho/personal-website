import { useTheme } from "@/hooks";
import { Icon } from "@/components/ui/Icon.tsx";
import { Screen } from "@/components/Screen.tsx";

export function Header() {
    const {theme} = useTheme();

    return (
        <Screen>
            <div className="mt-5">
                <div className="text-center">
                    <div className="text-2xl sm:text-4xl">
                    <span className="ms-2 text-4xl sm:text-6xl">
                        Franklin Neves Filho
                    </span>
                    </div>
                </div>
                <div className={'flex w-full h-full mx-auto'}>
                    <Icon
                        className=''
                        name={theme === 'dark' ? 'logoBlack' : 'logoWhite'}
                    />
                </div>
            </div>
        </Screen>
    );
}
