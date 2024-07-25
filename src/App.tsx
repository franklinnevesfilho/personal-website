import {NavItem} from "@/types";
import {ContactScreen, AboutScreen, ProjectsScreen} from "@/screens";
import {Header, Navbar} from "@/components";
import './style/App.css'
import {useWindowDimensions} from "@/hooks";
import MobileNavbar from "@/components/navbar/MobileNavbar.tsx";

export function App() {
    const {width} = useWindowDimensions();

    const navItems: NavItem[] =[
        {
            title:'About Me',
            component: AboutScreen
        },
        {
            title: 'Projects',
            component: ProjectsScreen
        },
        {
            title: 'Contact',
            component: ContactScreen
        },
    ]

    return (
        <>
            {
                width < 768 ? (
                    <MobileNavbar navItems={navItems}/>
                ) :(
                    <Navbar navItems={navItems}/>
                    )
            }
            <Header />
            <main className="main">
                {
                    navItems.map((item, index) => {
                        return item.component ? (
                            <item.component key={index} id={item.title}/>
                        ) : null
                    })
                }
            </main>
        </>
    );
}

