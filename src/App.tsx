import '../style/App.css'
import {Navbar} from "./components/Navbar.tsx";
import {NavItem} from "./components/types/NavItem.ts";
import {AboutScreen, HomeScreen, ProjectsScreen} from "./screens";

export function App() {
    const navItems: NavItem[] =[
        {
            title:'Home',
            id: 'home',
            component: HomeScreen
        },
        {
            title: 'Projects',
            id: 'projects',
            component: ProjectsScreen
        },
        {
            title: 'About',
            id: 'about',
            component: AboutScreen
        },
    ]

    return (
        <>
            <Navbar navItems={navItems}/>
            <div className="header-img-container">
                <img className={'header-img align-content-center bg-dark-subtle'} src=' ' alt="Navbar Image"/>
            </div>
            <main className="main">
                {
                    navItems.map((item, index) => {
                        return item.component ? (
                            <item.component key={index} id={item.id}/>
                        ) : null
                    })
                }
            </main>
        </>
    );
}

