import { useEffect, useState, useCallback } from "react";
import { NavItem } from "@/types";

export function useScrollSpy(navItems: NavItem[]) {
    const [offset, setOffset] = useState<number>(30);
    const [active, setActive] = useState<string>('');
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [scrollToActive, setScrollToActive] = useState<boolean>(false);

    const handleScroll = useCallback(() => {
        if (scrollToActive) return; // Disable updating active during scroll-to action

        const currentScrollPosition = window.scrollY;
        setScrollPosition(currentScrollPosition);

        const scrollPosition = currentScrollPosition + window.innerHeight / 2;
        let foundActiveId = '';

        for (const item of navItems) {
            const element = document.getElementById(item.title);
            if (element) {
                const top = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                    foundActiveId = item.title;
                    break;
                }
            }
        }

        if (foundActiveId !== active) {
            setActive(foundActiveId);
        }
    }, [active, navItems, scrollToActive]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollTo = (item: NavItem) => {
        setScrollToActive(true);
        const element = document.getElementById(item.title);
        if (element) {
            setActive(item.title);
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth',
            });

            const checkScrollCompletion = () => {
                if (Math.abs(window.scrollY - (element.offsetTop - offset)) < 1) {
                    setScrollToActive(false);
                } else {
                    requestAnimationFrame(checkScrollCompletion);
                }
            };

            requestAnimationFrame(checkScrollCompletion);
        }
    };

    return { active, setActive, scrollPosition, scrollTo, setOffset };
}
