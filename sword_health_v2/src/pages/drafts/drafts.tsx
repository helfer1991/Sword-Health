import React from 'react';
import { ArticleCard } from '../../components/article-card';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useLogin } from "../../hooks/useLogin";

import { Title, Container } from './styles';

export const Drafts: React.FC = () => {
    const { getUser } = useLogin();
    const [articles] = useLocalStorage(getUser()?.role === 'Admin' ? 'draft-' : `draft-${getUser()?.username}`);

    return (
        <section>
            <Title>
                Drafts
            </Title>
            <Container>
                {articles.map((article, index) => <ArticleCard data={article} key={`${article.title}-${index}`} />)}
            </Container>
        </section>
    );
}