import {ScreenProps} from "@/types";
import {Screen} from "@/components/Screen.tsx";
import {useWindowDimensions} from "@/hooks/useWindowDimensions.ts";
import ProjectsMobileScreen from "@/screens/ProjectsMobileScreen.tsx";
import {Project} from "@/types/Project.ts";
import {WobbleCard} from "@/components/ui/wobble-card.tsx";
import {useTheme} from "@/hooks";

export function ProjectsScreen(props : ScreenProps ) {
    const {theme} = useTheme();
    const {width} = useWindowDimensions();

    const projects: Project[] = [
        {
            name: 'Project 1',
            description: 'This is a project',
            technologies: ['Java', 'Spring boot', 'React'],
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com'
        },
        {
            name: 'Project 2',
            description: 'This is a project',
            technologies: ['Java', 'Spring boot', 'React'],
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com'
        },
        {
            name: 'Project 3',
            description: 'This is a project',
            technologies: ['Java', 'Spring boot', 'React'],
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com'
        },
        {
            name: 'Project 4',
            description: 'This is a project',
            technologies: ['Java', 'Spring boot', 'React'],
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com'
        }
        ]

    return (
        width > 760 ? (
            <Screen title={'Projects'} {...props}>
                <div className={'row z-0'}>
                    <div className="col">
                        <div className="flex flex-wrap pt-6 pb-6 justify-center border border-neutral-400 rounded-2xl">
                            {
                                projects.map((project, index) => (
                                    <WobbleCard
                                        key={index}
                                        containerClassName={`rounded-3xl w-1/4 m-2
                                        ${theme == 'dark' ? 'bg-blue-900' : 'bg-blue-500'}`
                                    }
                                    >
                                        <h2>{project.name}</h2>
                                        <img src={project.image} alt={project.name}/>
                                        <p>{project.description}</p>

                                        <div className={'w-auto m-0'}>
                                            <h4>Tech used:</h4>
                                            {project.technologies.map((technology, index) => (
                                                <span key={index}>{technology}</span>
                                            ))}
                                        </div>
                                    </WobbleCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Screen>
        ) :(
            <ProjectsMobileScreen/>
        )
    );
}

