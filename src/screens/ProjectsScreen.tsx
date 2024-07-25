import {ScreenProps} from "@/types";
import {Screen} from "@/components/Screen.tsx";
import {useWindowDimensions} from "@/hooks/useWindowDimensions.ts";
import ProjectsMobileScreen from "@/screens/ProjectsMobileScreen.tsx";
import {Project} from "@/types/Project.ts";
import {useTheme} from "@/hooks";

import ProjectImages from "@/assets/projects";
import {Skill} from "@/components";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card.tsx";

export function ProjectsScreen(props : ScreenProps ) {
    const {theme} = useTheme();
    const {width} = useWindowDimensions();

    const projects: Project[] = [
        {
            name: 'Outfit Finder',
            description: 'This is a small description of my project that took a log of work and effort',
            technologies: ['Java', 'Spring boot', 'React'],
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com'
        },
        {
            name: 'Blind Calculator',
            description: 'This program was design for Vertilux to help their customers ' +
                'to calculate the amount of fabric needed for their blinds, and to determine what' +
                'type of blind they need based on their window measurements.',
            technologies: ['Typescript', 'React', 'Chart.js'],
            image: ProjectImages.blindCalculator,
            github: 'https://github.com/franklinnevesfilho'
        },
        {
            name: 'Project 2',
            description: 'This is a small description of my project that took a log of work and effort',
            technologies: ['Java', 'Spring boot', 'React'],
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com'
        },
        {
            name: 'Project 3',
            description: 'This is a small description of my project that took a log of work and effort',
            technologies: ['Java', 'Spring boot', 'React'],
            image: 'https://via.placeholder.com/150',
            github: 'https://github.com'
        }]

    const ProjectCard = ({project}: {project: Project}) => (
        <CardContainer>
            <CardBody
                className={`cursor-pointer flex flex-col p-4 rounded-xl ${theme == 'dark' ? 'bg-neutral-700' : 'bg-neutral-200 border border-neutral-700'}`}
            >
                <div onClick={() => window.open(project.github, '_blank')}>

                    <CardItem
                        translateZ={50}
                    >
                        <h2 className={'text-2xl '}>{project.name}</h2>
                    </CardItem>
                    <CardItem
                        className={'flex items-center justify-center h-full w-full rounded overflow-hidden cursor-pointer'}
                        translateZ={50}
                    >
                        <div>
                            <div className="flex items-center justify-center h-full w-full rounded overflow-hidden">
                                <img src={project.image} alt={project.name} className={'w-full h-full'}/>
                            </div>
                            <p>{project.description}</p>
                        </div>
                    </CardItem>
                    <CardItem>
                        <div className={'mt-2'}>
                            <h4>Tech used:</h4>
                            <div className={'flex flex-wrap justify-center'}>
                                {project.technologies.map((technology, index) => (
                                    <Skill key={index} name={technology} hover={false}/>
                                ))}
                            </div>
                        </div>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )

    return (
        width > 760 ? (
            <Screen title={'Projects'} {...props}>
                <div className={`w-full border rounded-lg ${theme == 'dark'? 'border-neutral-100' : 'border-neutral-700'}`}>
                    <div className="w-full">
                        <div className="flex flex-wrap w-full items-center justify-center">
                            {
                                projects.map((project, index) => (
                                    <div className={'flex m-5 w-72'}>
                                        <ProjectCard key={index} project={project}/>
                                    </div>
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

