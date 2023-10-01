import { useState, useEffect } from "react";

const mediaQuery = (query: string) => {

    const [hook, setHook] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== hook) {
            setHook(media.matches);
        }

        const listener = () => setHook(media.matches)
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [hook, query])

    return hook;
}