import React, { useState, useEffect, useCallback } from 'react';
import { ArticleCard } from '../article-card';
import { MainArticleCard } from '../../components/main-card';

import { Container, CategoriesWrapper, CategoriesParagraph, CategoryButton, CardsWrapper, Button, ButtonText } from './styles';


type Article = {
    title: string;
    description: string;
    image: string;
    category: string;
    details: string
}

type ArticlesListProps = {
    localStorageKey: string;
}

const categoriesList = ["Marketing", "Design", "Engineering"];

export const ArticlesList: React.FC<ArticlesListProps> = ({ localStorageKey }) => {
    const [articles, setArticles] = useState<Array<Article>>([]);
    const [filteredArticles, setFilteredArticles] = useState<Array<Article>>([]);
    const [isVisible, setIsVisible] = useState<number>(9);
    const [chosenCategory, setChosenCategory] = useState<string | null>(null);

    useEffect(() => {
        const storedArticles =  Object.entries(localStorage)
        .filter(([key, value]) => key.startsWith(`${localStorageKey}`))
        .map(([key, value]) => JSON.parse(value));
        if(storedArticles) {
            setArticles(storedArticles);
            setFilteredArticles(storedArticles);
        }
    }, []);

    const handleFilterCategory = (category: string) => {
        (chosenCategory !== category) ? 
            setFilteredArticles(articles.filter(article => article.category === category)) :  
            setFilteredArticles(articles);
        setChosenCategory(category)
    }

    const showMoreItems = useCallback(() => {
        setIsVisible((prevValue) => prevValue + 8);
    }, [isVisible]);

    return (
        <Container>
            {articles.length > 0  && <MainArticleCard data={filteredArticles[0]} />}
            <CategoriesWrapper>
                <CategoriesParagraph>Categories</CategoriesParagraph>
                {categoriesList.map(category => <CategoryButton onClick={() => handleFilterCategory(category)} key={category}>{category}</CategoryButton>)}
            </CategoriesWrapper>
            <CardsWrapper>
                {filteredArticles.slice(0, isVisible).map((article, index) => index > 0 && <ArticleCard data={article} key={`${article.title}-${index}`} />)}
            </CardsWrapper>
            {(filteredArticles.length - isVisible > 0) && 
                <Button onClick={showMoreItems}>
                    <ButtonText>Load more</ButtonText>
                </Button>
            }
        </Container>);
}