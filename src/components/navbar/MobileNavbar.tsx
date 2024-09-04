import React, { useState, useEffect, useRef } from "react";
import { useScrollSpy, useTheme } from "@/hooks";
import { NavItem } from "@/types";
import { ThemeToggle } from "@/components";

interface MobileNavbarProps {
    navItems: NavItem[];
}

function MobileNavbar({ navItems }: MobileNavbarProps) {
    const { active, setActive, scrollPosition, scrollTo, setOffset } = useScrollSpy(navItems);
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu element

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when clicking outside
    useEffect(() => {
        setOffset(25)
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, setOffset]);

    const NavItemComponent = ({ title, onClick }: { title: string, onClick?: (event: React.MouseEvent)=> void }) => {
        const handleOnClick = (event: React.MouseEvent) =>{
            setIsOpen(false);
            onClick ? onClick(event) : scrollTo({ title });
        }

        return (
            <li
                className={`text-center py-2  ${active === title ? 'bg-gray-300' : ''}`} // Highlight active item
                onClick={handleOnClick}
            >
                <a className="hover:bg-gray-200 rounded-lg text-2xl">
                    {title}
                </a>
            </li>
        );
    }

    return (
        <div
            ref={menuRef}
            className={`fixed z-50 flex-col flex items-center px-5 pt-[5px] rounded-b-xl w-full
            transition-all duration-500 ease-in-out
            ${(scrollPosition > 50 ? 
                (theme == 'dark' ? ('bg-neutral-100 shadow-neutral-300') : ('bg-neutral-800 shadow-neutral-950'))
                + ' shadow-md'
                : 'bg-transparent')}
        `}>
            <div className={'flex flex-row w-full justify-between items-center'}>
                <div className="flex items-center justify-center">
                    <ThemeToggle height={50} width={100} knobWidth={35} knobHeight={35} translationX={56}/>
                </div>
                <button
                    className={`flex flex-col h-14 w-14 items-center justify-center p-2 border rounded-lg focus:outline-none focus:ring ${
                        theme === 'dark' ? 'bg-neutral-200 border-neutral-900' : 'bg-neutral-700'
                    }`}
                    onClick={toggleMenu}
                >
                    <div
                        className={`w-6 h-1 bg-black my-0.5 transition-transform duration-300 
                        ${isOpen ? 'transform rotate-45 translate-y-2' : ''}
                        ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'}
                        `}
                    ></div>
                    <div
                        className={`w-6 h-1 bg-black my-0.5 transition-opacity duration-300 
                        ${isOpen ? 'opacity-0' : ''}
                        ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'}
                        `}
                    ></div>
                    <div
                        className={`w-6 h-1 bg-black my-0.5 transition-transform duration-300 
                        ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}
                        ${theme === 'dark' ? 'bg-neutral-900' : 'bg-neutral-100'}
                        `}
                    ></div>
                </button>
            </div>

            <div
                style={{
                    transition: 'max-height 0.2s, opacity 0.2s',
                }}
                className={`w-full mt-4 border rounded-lg shadow-lg overflow-hidden
                ${theme === 'dark' ? 'bg-neutral-100 text-neutral-900' : 'bg-neutral-700 text-neutral-100'}
                ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <ul className="flex flex-col p-2 space-y-1">
                    <NavItemComponent
                        title="Home"
                        onClick={(event) =>{
                            event.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setActive('')
                        }}
                    />
                    {navItems.map((item, index) => (
                        <NavItemComponent key={index} title={item.title} />
                    ))}
                    <NavItemComponent
                        title="Resume"
                        onClick={(event) =>{
                            event.preventDefault()
                            window.open('/resume', '_blank');
                        }}
                    />
                </ul>
            </div>
        </div>
    );
}

export default MobileNavbar;
