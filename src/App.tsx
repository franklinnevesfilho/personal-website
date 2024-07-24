import {NavItem} from "@/types";
import {ContactScreen, HomeScreen, ProjectsScreen} from "@/screens";
import {Header, Navbar} from "@/components";
import './style/App.css'

export function App() {
    const navItems: NavItem[] =[
        {
            title:'About Me',
            component: HomeScreen
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
            <Navbar navItems={navItems}/>
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

