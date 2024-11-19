import {Screen, Skill} from '@/components';
import {ScreenProps} from "@/types";
import {useWindowDimensions} from "@/hooks";
import {Skill as SkillType} from "@/types/Skill.ts";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card.tsx";
import images from "@/assets/images";


export function AboutScreen(props:  ScreenProps) {
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
        {name: 'Agile'},
        {name: 'Scrum'},
        {name: 'Slack'},
        {name: 'Microsoft Teams'},
        {name: 'Zoom'},
    ]

    return (
        <Screen {...props}>
            <div className={`flex ${width > 760 ? 'flex-row justify-between' : 'flex-col justify-center items-center'}`}>
                <div className={`flex h-full p-2 ${width > 760? 'w-1/2' : 'w-11/12'}`}>
                        <CardContainer className="flex flex-grow bg-neutral-300 dark:bg-white w-full h-full me-5 rounded-2xl ">
                            <CardBody className="content-center w-full h-full">
                                    <CardItem
                                        className="flex items-center justify-center h-full w-full rounded overflow-hidden cursor-pointer"
                                        translateZ={50}
                                    >
                                        <img
                                            className="object-cover w-full h-full"
                                            src={images.proHeadshot}
                                            alt="profile"
                                        />
                                    </CardItem>
                            </CardBody>
                        </CardContainer>
                    <div className="flex pt-0 w-1/3 flex-col">
                        <CardContainer className="flex-grow">
                            <CardBody className="content-center">
                                <CardItem
                                    className={`flex items-center justify-center rounded 
                                    overflow-hidden cursor-pointer mb-2 bg-neutral-800 
                                    dark:bg-neutral-200 border-2 border-neutral-700 dark:border-neutral-400`}
                                    translateZ={50}
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src={images.SHPEConvention}
                                        alt="profile"
                                    />
                                </CardItem>
                                <CardItem
                                    className={`flex items-center justify-center rounded 
                                    overflow-hidden cursor-pointer border-2 border-neutral-700 dark:border-neutral-400`}
                                    translateZ={50}
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src={images.demoEd2}
                                        alt="profile"
                                    />
                                </CardItem>
                                <CardItem
                                    className={`flex items-center justify-center 
                                    rounded overflow-hidden cursor-pointer mt-2 
                                    border-2 border-neutral-700 dark:border-neutral-400`}
                                    translateZ={50}
                                >
                                    <img
                                        className="object-cover w-full h-full"
                                        src={images.shellHacks}
                                        alt="profile"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
                <div className={`text-center ${width > 760 ? 'w-1/3' : 'w-11/12'} `}>
                    <h2 className={'text-4xl font-bold pt-3'}>About Me</h2>
                    <p>
                        I'm a first generation Brazilian-American, raised in Miami, Florida. Currently attending
                        <span className={'fiu font-extrabold text-xl'}> FIU</span>.
                    </p>
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
                        I'm constantly learning and improving my skills, and I'm excited to see where my journey takes
                        me.
                    </p>
                </div>
            </div>
            <div className={`w-auto pt-10 pb-16`}>
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

