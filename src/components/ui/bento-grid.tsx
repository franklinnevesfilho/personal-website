import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                `grid md:auto-rows-[18rem] 
                        grid-cols-1 md:grid-cols-3 
                        gap-4 max-w-7xl mx-auto `, className)}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  header,
                                  image,
                                  onSelected,
                                  description,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    image?: string;
    onSelected?: () => void;
}) => {
    return (
        <motion.div
            layoutId={`${title}`}
            onClick={onSelected}
            className={cn(
                `row-span-1 rounded-xl group/bento hover:shadow-xl 
                transition duration-200 shadow-input dark:shadow-none p-3 
                dark:bg-neutral-200 bg-neutral-800 border border-transparent 
                justify-between flex flex-col space-y-4`,
                className
            )}
        >
            {header}
            <motion.div
                layoutId={`imageContainer-${title}`}
                className={`flex flex-col h-full justify-evenly group-hover/bento:translate-x-2 transition duration-200 cursor-pointer`}>
                <motion.div
                    layoutId={`image-${title}`}
                    className={`flex items-center justify-center 
                                    rounded overflow-hidden mt-2 
                                    border-2`}>
                    {<img
                        src={image}
                        alt="placeholder"
                        className="w-full h-full object-cover"
                    />}
                </motion.div>
                <motion.div
                    layoutId={`title-${title}`}
                    className="mt-1 text-2xl font-bold text-neutral-200 dark:text-neutral-900">
                    {title}
                </motion.div>
                {
                    description && (
                        <motion.div
                            layoutId={`description-${title}`}
                            className={`text-neutral-200 dark:text-neutral-800`}>
                            {description}
                        </motion.div>
                    )
                }
            </motion.div>
        </motion.div>
    );
};
