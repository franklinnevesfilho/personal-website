import {ScreenProps} from "@/types";
import {Screen} from "@/components/Screen.tsx";

export function ProjectsScreen(props : ScreenProps ) {
    return (
        <Screen title={'Projects'} {...props}>
            <div className={'row z-0'}>
                <div className="col">
                    <p>These are some of my projects</p>
                </div>
            </div>
        </Screen>
    );
}

