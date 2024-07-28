import { useTheme } from "@/hooks";
import { Icon } from "@/components/ui/Icon.tsx";
import { Screen } from "@/components/Screen.tsx";

export function HomeScreen() {
    const {theme} = useTheme();

    return (
        <Screen containerClassName={'flex'} className="flex-grow justify-between">
                <div className="w-[100%] md:w-[50%] mx-auto my-auto">
                    <Icon name={theme === 'dark' ? 'logoBlack' : 'logoWhite'} />
                </div>
                <div className="flex items-center justify-center w-full h-1/3 md:h-1/4 bg-neutral-800 dark:bg-neutral-200 p-2">
                        <div className="flex flex-wrap flex-col">
                            <h1 className="text-2xl text-start text-neutral-100 dark:text-neutral-800">
                                My name is <span className="text-3xl">Franklin Neves Filho</span>
                            </h1>
                            <div className={`m-2`}>
                                <p className=" flex flex-wrap text-lg text-neutral-100 dark:text-neutral-800">
                                    I am a Full Stack Developer, currently a student of Computer Science at Florida International University.
                                </p>
                                <p className={'flex flex-wrap text-lg text-neutral-100 dark:text-neutral-800'}>
                                    I'm always looking to expand my knowledge and learn new technologies!
                                </p>
                            </div>
                        </div>
                </div>
        </Screen>


    );
}
