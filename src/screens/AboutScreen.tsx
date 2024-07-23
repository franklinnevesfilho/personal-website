import {Screen} from "../components/Screen.tsx";
import {ScreenProps} from "../components/types/ScreenProps.ts";

export function AboutScreen(props: ScreenProps) {
    return (
        <Screen title={'About me'} className={'pt-screen'} {...props}>
            <p>Hi, I'm Franklin Neves Filho, a software developer from Brazil.</p>
        </Screen>
    );
}

