import React from "react";

export interface ScreenProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    title?: string;
    children?: React.ReactNode;
    id?: string;
    containerClassName?: string;
}