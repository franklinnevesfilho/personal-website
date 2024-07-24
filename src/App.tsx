import './style/App.css'
import {NavItem} from "./types";
import {AboutScreen, HomeScreen, ProjectsScreen} from "./screens";
import {Header, Navbar} from "./components";

export function App() {
    const navItems: NavItem[] =[
        {
            title:'Home',
            component: HomeScreen
        },
        {
            title: 'Projects',
            component: ProjectsScreen
        },
        {
            title: 'Contact',
            component: AboutScreen
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

