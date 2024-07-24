import React, { useEffect } from "react";


// For Expandable Card animation
// https://ui.aceternity.com/components/expandable-card
export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: (event: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};