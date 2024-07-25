import { useEffect, useRef, useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { useOutsideClick } from "@/hooks";
import {Screen} from "@/components";
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
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.name}`}
                            layout
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
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.name}`}
                            ref={ref}
                            className="w-full h-full  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.name}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.image}
                                    alt={active.name}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.name}`}
                                            className={'text-3xl text-neutral-800 dark:text-neutral-200 text-center'}
                                        >
                                            {active.name}
                                        </motion.h3>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.name}`}
                                        href={active.github}
                                        target="_blank"
                                        className={`px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black`}
                                    >
                                        Github
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        <p>
                                            {
                                                active.description
                                            }
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.name}`}
                        key={`card-${project.name}`}
                        onClick={() => setActive(project)}
                        className="p-3 m-5 border flex flex-row md:flex-row justify-between items-center border-neutral-800 dark:border-neutral-200 rounded-xl cursor-pointer"
                    >
                        <motion.div layoutId={`image-${project.name}`}>
                            <img
                                width={100}
                                height={100}
                                src={project.image}
                                alt={project.name}
                                className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                            />
                        </motion.div>
                        <div className="">
                            <motion.h3
                                layoutId={`title-${project.name}`}
                                className="text-2xl text-neutral-800 dark:text-neutral-200 text-center"
                            >
                                {project.name}
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
