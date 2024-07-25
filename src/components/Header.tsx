import { useTheme } from "@/hooks";
import { Icon } from "@/components/ui/Icon.tsx";
import { Screen } from "@/components/Screen.tsx";

export function Header() {
    const {theme} = useTheme();

    // <div className="w-full p-10 mx-5 rounded-lg">
    //     <div className="text-center mt-4">
    //         <div className="text-2xl sm:text-4xl">
    //                     <span className="ms-2 text-4xl sm:text-6xl">
    //                         Franklin Neves Filho
    //                     </span>
    //         </div>
    //     </div>
    //     <div className="flex w-full justify-start px-4">
    //         <div className="flex justify-center items-center w-full p-2 overflow-hidden">
    //             <Icon
    //                 className='w-full h-auto max-h-32 sm:max-h-48 object-contain'
    //                 name={theme === 'dark' ? 'logoBlack' : 'logoWhite'}
    //             />
    //         </div>
    //     </div>
    // </div>

    return (
        <Screen className={''}>
            <div className={'m-5'}>
                <Icon
                    className=''
                    name={theme === 'dark' ? 'logoBlack' : 'logoWhite'}
                />
            </div>
        </Screen>
    );
}
