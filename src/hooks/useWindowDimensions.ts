import {useEffect, useState} from "react";

export function useWindowDimensions() {
    function getWindowDimensions() {
        const {innerWidth: width, innerHeight: height} = window;
        console.log("Width: ", width, "Height: ", height);
        return {width, height};
    }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}