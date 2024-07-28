import React from 'react';
import icons from '@/assets/icons';
import {IconName} from "@/types";

// Define the types for the props
interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
    name: IconName
}

export function Icon({ name, ...props}: IconProps){
    const SvgIcon = icons[name];

    if (!SvgIcon) {
        return null; // Optionally, you could return a placeholder or error message if the icon is not found
    }

    return (
            <img src={SvgIcon} alt={name} {...props} />
    );
}

