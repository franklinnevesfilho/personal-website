import {Screen} from '../components/Screen';
import {ScreenProps} from "../components/types/ScreenProps.ts";

export function HomeScreen(props:  ScreenProps) {
    return (
        <Screen {...props}>
            <div className={'row z-0'}>
                <div className="col">
                    <h2>Home</h2>
                    <p>Welcome to my website</p>
                </div>
            </div>
        </Screen>
    );
}

