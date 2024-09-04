import React from "react";
import { ThemeToggle } from "@/components";
import '@/style/Navbar.css';
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { NavbarProps } from "@/components/navbar/NavbarProps";
import { useScrollSpy } from "@/hooks/useScrollSpy";

function Navbar({ title, navItems }: NavbarProps) {
    const { active, setActive, scrollPosition, scrollTo } = useScrollSpy(navItems); // Use the hook
    const { width } = useWindowDimensions();

    const NavItemComponent = ({ title, onClick }: { title: string, onClick?: (arg: React.MouseEvent) => void }) => (
        <li
            className={'nav-item ' + (active === title ? 'active' : '')}
            onClick={onClick}
        >
            <a className={'text-xl'}>{title}</a>
        </li>
    );

    return (
        <div className={'nav-container ' + (scrollPosition > 100 ? 'navbar-scroll ' : '')}>
            <div className={`navbar-content ${title || width < 760 ? 'justify-center' : 'justify-end'}`}>
                {title && <div className="navbar-title"><h1>{title}</h1></div>}
                <div className={`nav w-auto ${width > 760 && 'me-10'}`}>
                    <ul className={'nav-list'}>
                        <NavItemComponent title={'Home'} onClick={(event) => {
                            event.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setActive('')
                        }} />
                        {navItems.map((item, index) => (
                            <NavItemComponent key={index} title={item.title}
                                              onClick={(event) => {
                                                  event.preventDefault();
                                                  scrollTo(item);
                                              }} />
                        ))}
                        <NavItemComponent title={'Resume'} onClick={(e)=>{
                            e.preventDefault();
                            window.open('/resume', '_blank');
                        }} />
                        <ThemeToggle />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
