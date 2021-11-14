import React from 'react';
import { ArticleCard } from '../../components/article-card';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { Title, Container } from './styles';

export const Drafts: React.FC = () => {
    const [data] = useLocalStorage();

    return (
        <section>
            <Title>
                Drafts
            </Title>
            <Container>
                {data.map((data, index) => <ArticleCard data={data} key={`${data.title}-${index}`} />)}
            </Container>
        </section>
    );
}