import {ScreenProps, Social} from "@/types";
import {Screen} from "@/components";
import {useTheme} from "@/hooks";
import {Icon} from "@/components/ui/Icon.tsx";
import {Email} from "@/types";
import React, {useState} from "react";

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
            link: 'www.github.com/franklinnevesfilho',
            whiteIcon: 'githubBlack',
            blackIcon: 'githubWhite'
        },
        {
            name: 'Linkedin',
            link: 'www.linkedin.com/in/franklinnevesfilho',
            whiteIcon: 'linkedin',
            blackIcon: 'linkedin'
        },
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setEmail({
            ...email,
            [name]: value
        })
    }


    const EmailCard = () => {
        return (
            <div className="flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold">Send me an email</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <input type="text" name="from" value={email.from} onChange={handleInputChange}
                               placeholder="Your email" className="w-1/2 p-2 my-2"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <input type="text" name="subject" value={email.subject} onChange={handleInputChange}
                               placeholder="Subject" className="w-1/2 p-2 my-2"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <textarea name="body" value={email.body} onChange={handleInputChange}
                                  placeholder="Message" className="w-1/2 p-2 my-2"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <button className="bg-blue-500 text-white p-2 rounded-lg">Send</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Screen title={'Contact Me'} className={'pt-screen'} {...props}>
            <div className={'flex flex-col items-center justify-center'}>
                <div className="flex flex-row">
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
                                <div className="flex items-center justify-center text-3xl">
                                    {social.name}
                                </div>
                            </a>

                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <EmailCard/>
                </div>
            </div>
        </Screen>
    );
}

