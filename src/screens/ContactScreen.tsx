import {Screen} from "../components/Screen.tsx";
import {ScreenProps} from "@/types";

export function ContactScreen(props: ScreenProps) {
    return (
        <Screen title={'Contact'} className={'pt-screen'} {...props}>
            <div>
                <p>
                    Contact Information: Your email address, phone number, and any other
                    relevant contact information.
                </p>
                <p>
                    Social Media: Links to your LinkedIn, GitHub, Twitter, and other social media profiles.
                </p>
                <p>
                    Contact Form: A form that allows visitors to send you a message directly from your portfolio.
                </p>
            </div>
        </Screen>
    );
}

