import React from 'react';
import {Email} from "@/types";

interface EmailCardProps {
    email: Email;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function EmailCard({email, handleInputChange}: EmailCardProps) {
    return (
        <div className={`flex flex-col w-[80%] h-[100%] 
            items-center justify-center p-4 rounded-2xl border-4 border-neutral-800 dark:border-neutral-300
            text-neutral-200 `}>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 capitalize">Send me an email</h1>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <input
                        type="text"
                        name="subject"
                        value={email.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className={`w-[80%] md:w-1/2 min-h-[60px] text-neutral-800
                        p-2 my-2 rounded border-2 border-neutral-800 dark:border-neutral-300`}
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <input
                        type="text"
                        name="from"
                        value={email.from}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className={`w-[80%] md:w-1/2 min-h-[60px] p-2 my-2 rounded 
                        text-neutral-800 border-2 border-neutral-800 dark:border-neutral-300`}
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <textarea
                        name="body"
                        value={email.body}
                        onChange={handleInputChange}
                        placeholder="Message"
                        className={`w-[80%] md:w-1/2 min-h-[150px] p-2 my-2 rounded text-neutral-800
                        border-2 border-neutral-800 dark:border-neutral-300
                        `}
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <button className={`w-[60%] md:w-1/4 bg-green-600 text-white p-2 rounded-lg
                    hover:bg-green-900 hover:cursor-pointer hover:shadow-neutral-300
                    `}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EmailCard;