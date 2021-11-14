import { useState, useEffect } from "react";

import { useLogin } from "./useLogin";

type Article = {
    title: string;
    description: string;
    image: string;
    category: string;
    details: string
}

export function useLocalStorage() {
    const [data, setData] = useState<Array<Article>>([]);
    const { getUser } = useLogin();
    const localStorageKey = getUser()?.role === 'Admin' ? 'draft-' : `draft-${getUser()?.username}`;

    useEffect(() => {
        const storedArticles =  Object.entries(localStorage)
        .filter(([key, value]) => key.startsWith(`${localStorageKey}`))
        .map(([key, value]) => JSON.parse(value));
        if(storedArticles) {
            setData(storedArticles);
        }
    }, []);

    return [data, setData] as const;
}