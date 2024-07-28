import { useTheme } from "@/hooks";
import { Icon } from "@/components/ui/Icon.tsx";
import { Screen } from "@/components/Screen.tsx";
import { socials } from "@/assets";

export function HomeScreen() {
    const {theme} = useTheme();

    return (
        <Screen containerClassName={'flex flex-col'} className="flex-grow justify-between">
                <div className="w-[100%] md:w-[50%] mx-auto my-auto">
                    <Icon name={theme === 'dark' ? 'logoBlack' : 'logoWhite'} />
                </div>
                <div className="flex items-center justify-center w-full h-1/3 md:h-1/4 bg-neutral-800 dark:bg-neutral-200 p-2">
                        <div className="flex flex-wrap flex-col">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="text-2xl text-start text-neutral-100 dark:text-neutral-800">
                                    I'm <span className="text-3xl">Franklin Neves Filho</span>
                                </div>
                                <div className="flex items-center justify-center h-8 gap-2">
                                    {
                                        socials.map((social, index) => (
                                            social.blackIcon && social.whiteIcon && (
                                                <a
                                                    onClick={() => window.open(social.link, '_blank')}
                                                    key={index}
                                                    className="flex items-center justify-center w-1/2 h-full mr-2 cursor-pointer">
                                                    {
                                                        theme === 'dark' ? (
                                                            <Icon name={social.whiteIcon} className="w-full h-full object-contain"/>
                                                        ) : (
                                                            theme === 'light' ? (
                                                                <Icon name={social.blackIcon}
                                                                      className="w-full h-full object-contain"/>
                                                            ) : null
                                                        )
                                                    }
                                                </a>
                                            )
                                        ))
                                    }
                                </div>
                            </div>
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
