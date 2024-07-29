import  { forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Skill } from '@/components';
import { CloseIcon } from '@/screens/ProjectsScreen.tsx';
import { Project } from '@/types/Project.ts';
import {Icon} from "@/components/ui/Icon.tsx";
import {Theme} from "@/types";

interface ProjectOverviewProps {
    active: Project | boolean | null;
    setActive: (arg: Project | boolean | null) => void;
    theme: Theme
}

// Forward the ref to the div element
const ProjectOverview = forwardRef<HTMLDivElement, ProjectOverviewProps>((
    { active, theme, setActive }, ref) => {
    return (
        <>
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className={`mx-auto my-auto fixed
                    inset-0 place-items-center z-[100] 
                    md:w-1/3 md:h-[90%]`}>
                        <motion.button
                            key={`button-${active.title}`}
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
                            className={`flex absolute top-2 right-2 
                            items-center justify-center 
                            bg-white rounded-full h-12 w-12`}
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}`}
                            ref={ref}
                            className={`w-full h-full flex flex-col bg-white
                            dark:bg-neutral-900 sm:rounded-3xl overflow-hidden`}
                        >
                            <motion.div layoutId={`image-${active.title}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.image ? active.image : 'https://via.placeholder.com/150'}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="flex justify-between items-start p-4">
                                <motion.h3
                                    layoutId={`title-${active.title}`}
                                    className={'text-3xl text-neutral-800 dark:text-neutral-200 text-center'}
                                >
                                    {active.title}
                                </motion.h3>
                                <motion.a
                                    href={active.link}
                                    target="_blank"
                                    layoutId={`button-${active.title}`}
                                    className={` items-center justify-center 
                                    hidden md:flex border-4 p-2 
                                    hover:cursor-pointer
                                    hover:shadow-neutral-300
                                    dark:
                                    rounded-lg text-xl gap-2`}
                                >
                                    <Icon
                                        className={`w-6 h-6`}
                                        name={theme == 'dark' ? 'githubWhite' : 'githubBlack'}/>
                                    Github
                                </motion.a>
                            </div>
                            <div
                                onClick={() => setActive(null)}
                                className="flex pt-4 relative px-4 h-[40%]"
                            >
                                <motion.div
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    className={`text-neutral-600 text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 
                                        dark:text-neutral-400 scroll-container
                                        [scrollbar-width:none] 
                                        [-webkit-overflow-scrolling:touch]`}
                                >
                                    <div className={'text-2xl'}>
                                        {active.description}
                                    </div>
                                    <div>
                                        <h3 className={'text-lg'}>
                                            Technologies
                                        </h3>
                                        <motion.div
                                            layoutId={`technologies-${active.title}`}
                                            className={`w-auto`}>
                                            <div className="flex flex-wrap justify-center">
                                                {active.technologies.map((tech, index) => (
                                                    <Skill key={index} name={tech}/>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
        </>
    );
});

export default ProjectOverview;
