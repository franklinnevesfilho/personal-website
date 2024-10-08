import {ScreenProps} from "./ScreenProps.ts";

export interface NavItem{
    title: string;
    component?: (props: ScreenProps) => JSX.Element;
}