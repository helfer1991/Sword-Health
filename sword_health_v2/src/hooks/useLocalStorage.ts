import { useState, useEffect } from "react";

type Article = {
    title: string;
    description: string;
    image: string;
    category: string;
    details: string
}

export function useLocalStorage(localStorageKey: string) {
    const [articles, setArticles] = useState<Array<Article>>([]);

    useEffect(() => {
        const storedArticles =  Object.entries(localStorage)
        .filter(([key, value]) => key.startsWith(`${localStorageKey}`))
        .map(([key, value]) => JSON.parse(value));
        if(storedArticles) {
            setArticles(storedArticles);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [articles] as const;
}