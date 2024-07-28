import {ScreenProps, Social} from "@/types";
import {Screen} from "@/components";
import {useTheme} from "@/hooks";
import {Icon} from "@/components/ui/Icon.tsx";
import {Email} from "@/types";
import React, {useCallback, useState} from "react";
import EmailCard from "@/components/EmailCard.tsx";

export function ContactScreen(props: ScreenProps) {
    const {theme} = useTheme();
    const [email, setEmail] = useState<Email>({
        from: '',
        subject: '',
        body: ''
    });

    const socials: Social[] = [
        {
            name: 'Github',
            link: 'https://github.com/franklinnevesfilho',
            whiteIcon: 'githubBlack',
            blackIcon: 'githubWhite'
        },
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/franklinnevesfilho/',
            whiteIcon: 'linkedin',
            blackIcon: 'linkedin'
        },
    ]

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmail(prevEmail => ({
            ...prevEmail,
            [name]: value
        }));
    }, []);

    return (
        <Screen title={'Contact Me'} className={''} {...props}>
            <div className={'flex flex-col items-center justify-center w-full h-full'}>
                <div className={`flex flex-row h-[10%] mb-3 border-4 w-[80%] rounded-2xl 
                items-center justify-center border-neutral-800 dark:border-neutral-300`}>
                    <div className="flex flex-row">
                        {socials.map((social, index) => (
                            <a href={social.link} target={'_blank'}
                               className="flex items-center justify-center mx-4 p-2 h-[50px]" key={index}>
                                {
                                    social.blackIcon && social.whiteIcon && (
                                        <div className="flex items-center justify-center w-1/2 h-full mr-2">
                                            {
                                                theme === 'dark' ? (
                                                    <Icon name={social.blackIcon} className="w-full h-full object-contain"/>
                                                ) : (
                                                    theme === 'light' ? (
                                                        <Icon name={social.whiteIcon}
                                                              className="w-full h-full object-contain"/>
                                                    ) : null
                                                )
                                            }
                                        </div>
                                    )
                                }
                                <div className="flex items-center justify-center text-2xl md:text-3xl">
                                    {social.name}
                                </div>
                            </a>

                        ))}
                    </div>
                </div>
                    <EmailCard
                        email={email}
                        handleInputChange={handleInputChange}
                    />
            </div>
        </Screen>
    );
}

