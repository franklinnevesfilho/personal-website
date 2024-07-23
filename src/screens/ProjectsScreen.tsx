import {ScreenProps} from "../components/types/ScreenProps.ts";
import {Screen} from "../components/Screen.tsx";

export function ProjectsScreen(props : ScreenProps ) {
    return (
        <Screen {...props}>
            <div className={'row z-0'}>
                <div className="col">
                    <h2>Projects</h2>
                    <p>These are some of my projects</p>
                </div>
            </div>
        </Screen>
    );
}

