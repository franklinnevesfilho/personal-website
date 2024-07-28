import { useEffect, useRef, useState } from "react";
import { motion} from "framer-motion";
import {useOutsideClick, useTheme} from "@/hooks";
import {ProjectOverview, Screen, Skill} from "@/components";
import {Project} from "@/types/Project.ts";
import {ScreenProps} from "@/types";
import {projects} from "@/assets/projects";

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h100v100H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

export function ProjectsScreen(props : ScreenProps) {
    const {theme} = useTheme();
    const [active, setActive] = useState<Project | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <Screen title={'Recent Projects'} {...props}>
                <ProjectOverview
                    theme={theme}
                    active={active}
                    setActive={setActive}
                    ref={ref}
                />
            <div className="flex w-[100%] p-2">
                <ul className="flex flex-col w-full gap-4">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={`card-${project.title}`}
                            key={`card-${project.title}`}
                            onClick={() => setActive(project)}
                            className={`flex flex-row items-center justify-between md:min-h-[100px]
                            shadow-black
                            cursor-pointer hover:shadow-lg bg-white dark:shadow-white dark:bg-transparent
                            border border-neutral-800 dark:border-neutral-200 p-2 rounded-2xl
                            `}
                        >
                            <motion.div
                                className={`'flex h-full items-center justify-center rounded-lg'`}
                                layoutId={`image-${project.title}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-lg object-top object-cover"
                                />
                            </motion.div>
                            <div className="flex flex-col gap-3">
                                <motion.h3
                                    layoutId={`title-${project.title}`}
                                    className={`flex items-center justify-center text-2xl text-neutral-800 
                                    font-bold
                                    dark:text-neutral-200 text-center`}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.div
                                    layoutId={`technologies-${project.title}`}
                                    className={`w-auto`}>
                                    <div className="flex flex-wrap justify-center">
                                        {project.technologies.map((tech, index) => (
                                            <Skill key={index} name={tech}/>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </ul>
            </div>
        </Screen>
    );
}
