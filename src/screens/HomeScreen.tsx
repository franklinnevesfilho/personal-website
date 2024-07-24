import {Screen} from '@/components/Screen';
import {ScreenProps} from "@/types";
import {useWindowDimensions} from "@/hooks/useWindowDimensions.ts";
import {Skill} from "@/types/Skill.ts";
import {useTheme} from "@/hooks";

export function HomeScreen(props:  ScreenProps) {
    const {theme} = useTheme();
    const {width} = useWindowDimensions();

    const skills: Skill[] = [
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
            <div className={'flex flex-col align-top'}>
                <div className={`text-center ${width > 760 ? 'w-1/3 self-end' : 'w-1/2 self-center'} `}>
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
                        <div key={index} className={`m-2 p-1 ps-2 pe-2 border
                        ${width > 760 ? 'lg' : 'text-xl'}
                        ${theme == 'dark' ? 'border-neutral-500 hover:bg-blue-600' : 'border-neutral-800 hover:bg-blue-300 text-neutral-900'} 
                        transition-colors cursor-pointer rounded-full`}>
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </Screen>
    );
}

