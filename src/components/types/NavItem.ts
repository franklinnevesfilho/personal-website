import {ScreenProps} from "./ScreenProps.ts";

export interface NavItem{
    title: string;
    id: string;
    component?: (props: ScreenProps) => JSX.Element;
}