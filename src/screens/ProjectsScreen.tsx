import React from "react";
import {ScreenProps} from "@/types";
import {Screen} from "@/components/Screen.tsx";
import {useWindowDimensions} from "@/hooks/useWindowDimensions.ts";
import {ProjectsMobileScreen} from "@/screens/ProjectsMobileScreen.tsx";
import {Project} from "@/types/Project.ts";
import {useOutsideClick, useTheme} from "@/hooks";

import {projects} from "@/assets/projects";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid.tsx";
import {useRef, useState} from "react";

export function ProjectsScreen(props : ScreenProps ) {
    const [selectedProject, setSelectedProject] = useState<Project| boolean | null>(null);
    const {theme} = useTheme();
    const {width} = useWindowDimensions();

    const ref = useRef<HTMLDivElement>(null)

    const handleProjectClick = (project: Project) => {
        console.log(project.title)
        setSelectedProject(project);
    }

    useOutsideClick(ref, () => setSelectedProject(null));

    // const ExpandedProject = ({project, setActive, ref}:
    //                              {
    //                                  project: Project | boolean | null
    //                                  setActive: (arg: Project | boolean | null) => void,
    //                                  ref: React.RefObject<HTMLDivElement>
    //                              }) => {
    //     return (
    //         <></>
    //         )
    // }


    return (
        width > 760 ? (
            <Screen title={'Projects'} {...props}>
                {/*<ExpandedProject*/}
                {/*    project={selectedProject}*/}
                {/*    setActive={setSelectedProject}*/}
                {/*    ref={ref}*/}
                {/*/>*/}
                <div
                    className={`w-full p-3 border rounded-lg ${theme == 'dark' ? 'border-neutral-100' : 'border-neutral-700'} overflow-x-auto`}>
                    <div className="flex space-x-4">
                        <BentoGrid>
                            {projects.map((project: Project) => (
                                <BentoGridItem
                                    key={project.title}
                                    title={project.title}
                                    onSelected={() => handleProjectClick(project)}
                                    description={
                                        <>
                                            <span
                                                className={'font-bold italic'}>Tech Stack:</span> {project.technologies.join(', ')}
                                        </>
                                    }
                                    image={project.image}
                                />
                            ))}
                        </BentoGrid>
                    </div>
                </div>
            </Screen>
        ) : (
            <ProjectsMobileScreen projects={projects} {...props}/>
        )
    );
}

