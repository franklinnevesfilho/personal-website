import {Screen, Skill} from '@/components';
import {ScreenProps} from "@/types";
import {useWindowDimensions} from "@/hooks";
import {Skill as SkillType} from "@/types/Skill.ts";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card.tsx";


export function HomeScreen(props:  ScreenProps) {
    const {width} = useWindowDimensions();

    const skills: SkillType[] = [
        {name: 'English'},
        {name: 'Spanish'},
        {name: 'Portuguese'},
        {name: 'Java'},
        {name: 'Spring boot'},
        {name: 'Spring Security'},
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'JavaScript'},
        {name: 'TypeScript'},
        {name: 'Android Studio'},
        {name: 'Python'},
        {name: 'ReactNative'},
        {name: 'Arduino'},
        {name: 'C'},
        {name:'Bootstrap'},
        {name: 'TailwindCSS'},
        {name: 'NodeJS'},
        {name: 'Express'},
        {name: 'MongoDB'},
        {name: 'PostgreSQL'},
        {name: 'Git'},
        {name: 'Adobe Illustrator'},
        {name: 'Docker'},
        {name: 'Kubernetes'},
        {name: 'Agile'},
        {name: 'Scrum'},
        {name: 'Slack'},
        {name: 'Microsoft Teams'},
        {name: 'Zoom'},
    ]

    return (
        <Screen {...props}>
            <div className={'flex flex-row justify-between'}>
                <div className="flex flex-row w-1/2 h-full p-2">
                    <div className="w-full h-full me-5 self-center">
                        <CardContainer className="w-full h-full ">
                            <CardBody className="content-center w-full h-full">
                                <CardItem
                                    className={'flex items-center justify-center h-full w-full rounded overflow-hidden cursor-pointer'}
                                    translateZ={50}
                                >
                                        <img
                                            className="object-cover w-full h-full"
                                            src="https://via.placeholder.com/150"
                                            alt="profile"
                                        />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className="flex pt-0 w-1/3 flex-col">
                        <CardContainer className="flex-grow">
                            <CardBody className="content-center">
                                <CardItem
                                    className={'flex items-center justify-center rounded overflow-hidden cursor-pointer mb-2'}
                                    translateZ={50}
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src="https://via.placeholder.com/150"
                                        alt="profile"
                                    />
                                </CardItem>
                                <CardItem
                                    className={'flex items-center justify-center  rounded overflow-hidden cursor-pointer'}
                                    translateZ={50}
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src="https://via.placeholder.com/150"
                                        alt="profile"
                                    />
                                </CardItem>
                                <CardItem
                                    className={'flex items-center justify-center  rounded overflow-hidden cursor-pointer mt-2'}
                                    translateZ={50}
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src="https://via.placeholder.com/150"
                                        alt="profile"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
                <div className={`text-center ${width > 760 ? 'w-1/3' : 'w-1/2'} `}>
                    <h2 className={'text-4xl font-bold pt-3'}>About Me</h2>
                    <p>
                        I've always been fascinated by technology and how it can be used to solve
                        complex problems.
                    </p>
                    <p>
                        I started programming with an Arduino kit, initially just skimming over the book
                        to the instructions rather than actually understanding anything.
                    </p>
                    <p>
                        I realized that I needed to understand the concepts behind the code if i wanted to build the
                        more complex projects I only dreamed of.
                    </p>
                    <p>
                        I started by learning Java, then moved to web development with HTML, CSS, and JavaScript.
                    </p>
                    <p>
                        I'm currently learning Python and ReactNative to build mobile apps.
                        My most recent project is a mobile app that suggests outfits based on the occasion, and weather.
                    </p>
                    <p>
                        I'm constantly learning and improving my skills, and I'm excited to see where my journey takes
                        me.
                    </p>
                </div>
            </div>
            <div className="w-auto pt-40 pb-16">
                <h2 className={'text-4xl font-bold pt-3 text-center mb-5'}>Skills</h2>
                <div className="flex flex-wrap justify-center">
                    {skills.map((skill, index) => (
                        <Skill key={index} name={skill.name}/>
                    ))}
                </div>
            </div>
        </Screen>
    );
}

