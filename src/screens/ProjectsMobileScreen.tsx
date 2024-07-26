import { useEffect, useRef, useState } from "react";
import { motion} from "framer-motion";
import { useOutsideClick } from "@/hooks";
import {ProjectOverview, Screen} from "@/components";
import {ScreenProps} from "@/types";
import {Project} from "@/types/Project.ts";

interface ProjectsMobileScreenProps extends ScreenProps {
    projects: Project[];
}

export function ProjectsMobileScreen({ projects, ...props }: ProjectsMobileScreenProps) {
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
        <Screen title={"Projects"} {...props}>
            <ProjectOverview
                active={active}
                setActive={setActive}
                ref={ref}
            />
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.title}`}
                        key={`card-${project.title}`}
                        onClick={() => setActive(project)}
                        className="p-3 m-5 border flex flex-row md:flex-row justify-between items-center border-neutral-800 dark:border-neutral-200 rounded-xl cursor-pointer"
                    >
                        <motion.div layoutId={`image-${project.title}`}>
                            <img
                                width={100}
                                height={100}
                                src={project.image}
                                alt={project.title}
                                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                            />
                        </motion.div>
                        <div className="">
                            <motion.h3
                                layoutId={`title-${project.title}`}
                                className="text-2xl text-neutral-800 dark:text-neutral-200 text-center"
                            >
                                {project.title}
                            </motion.h3>
                            </div>
                    </motion.div>
                ))}
            </ul>
        </Screen>
    );
}

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
