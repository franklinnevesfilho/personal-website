import { useTheme, useWindowDimensions } from '@/hooks';
import {cn} from "@/lib/utils.ts";

interface SkillProps {
    name: string;
    className?: string;
    hover?: boolean;
}

export function Skill({name, className, hover=true}: SkillProps) {
    const {theme} = useTheme();
    const {width} = useWindowDimensions();

    return (
        <div className={cn(`m-2 p-1 ps-2 pe-2 border
                        ${width > 760 ? 'lg' : 'text-xl'}
                        ${theme == 'dark' ? `border-neutral-500 ${hover&&'hover:bg-blue-600'}` : `border-neutral-800 ${hover&&'hover:bg-blue-300'} text-neutral-900`} 
                        transition-colors cursor-pointer rounded-full`, className)}>
            {name}
        </div>
    );
}

