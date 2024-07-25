import React, { useEffect, useState, useCallback } from "react";
import { NavItem } from "@/types";
import { ThemeToggle } from "./ThemeToggle.tsx";
import '@/style/Navbar.css';
import {useWindowDimensions} from "@/hooks/useWindowDimensions.ts";

interface NavbarProps {
    title?: string;
    navItems: NavItem[];
}

function Navbar({ title, navItems}: NavbarProps) {
    const [active, setActive] = useState<string>('');
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const {width} = useWindowDimensions();

    const scrollTo = (item: NavItem, event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        const element = document.getElementById(item.title);
        if (element) {
            setActive(item.title);
            const offset = -80
            window.scrollTo({
                top: element.offsetTop + offset,
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = useCallback(() => {
        setScrollPosition(window.scrollY);
        const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust to consider the viewport height

        let foundActiveId = '';

        for (const item of navItems) {
            const element = document.getElementById(item.title);
            if (element) {
                const top = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                    foundActiveId = item.title;
                }
            }
        }

        if (foundActiveId !== active) {
            setActive(foundActiveId);
        }
    }, [active, navItems]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Initial check in case the user lands on a scroll position
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className={'nav-container ' + (scrollPosition > 100 ? 'navbar-scroll ': '')}>
            <div className={`navbar-content ${title || width < 760 ? 'justify-center' : 'justify-end'}`}>
                {
                    title &&
                    <div className="navbar-title">
                        <h1>{title}</h1>
                    </div>
                }
                <div className={`nav w-auto ${width > 760 && 'me-10'}`}>
                    <ul className={'nav-list'}>
                        {navItems.map((item, index) => (
                            <li
                                className={'nav-item ' + (active === item.title ? 'active' : '')}
                                key={index}
                                onClick={(event) => scrollTo(item, event)}
                            >
                                <a>{item.title}</a>
                            </li>
                        ))}
                        <ThemeToggle />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
