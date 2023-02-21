import React from 'react';

import { ArticlesList } from '../../components/articles-list';

import { Container } from './styles';

export const Articles: React.FC= () => (
    <Container>
        <ArticlesList localStorageKey='formData' />
    </Container>
);
