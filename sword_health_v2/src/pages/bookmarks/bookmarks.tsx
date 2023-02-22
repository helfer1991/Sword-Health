import React from 'react';
import { ArticlesList } from '../../components/articles-list';
import { useLogin } from '../../hooks/useLogin';

import { Title } from './styles';

export const Bookmarks: React.FC = () => {
    const { getUser } = useLogin();

    return (
        <div>
            <Title>
                Bookmarks
            </Title>
            <ArticlesList localStorageKey={`bookmark-${getUser()?.username}`} />
        </div>
    );
}