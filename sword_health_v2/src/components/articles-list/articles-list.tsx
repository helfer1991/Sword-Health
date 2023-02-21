import React, { useState, useEffect } from 'react';
import { ArticleCard } from '../article-card';
import { MainArticleCard } from '../../components/main-card';
import { useLocalStorage } from "../../hooks/useLocalStorage";

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
    const [articles] = useLocalStorage(localStorageKey);
    const [filteredArticles, setFilteredArticles] = useState<Array<Article>>([]);
    const [isVisible, setIsVisible] = useState<number>(5);
    const [chosenCategory, setChosenCategory] = useState<string | null>(null);
    
    useEffect(() => {
        setFilteredArticles(articles);
    }, [articles]);
    

    const handleFilterCategory = (category: string) => {
        if(chosenCategory !== category) {
            setFilteredArticles(articles.filter(article => article.category === category));
            setChosenCategory(category);
        } else {
            setFilteredArticles(articles);
            setChosenCategory(null);
        }
    }

    return (
        <Container>
            {filteredArticles.length > 0  && <MainArticleCard data={filteredArticles[0]} />}
            <CategoriesWrapper>
                <CategoriesParagraph>Categories</CategoriesParagraph>
                {categoriesList.map(category => <CategoryButton isSelected={category === chosenCategory} onClick={() => handleFilterCategory(category)} key={category}>{category}</CategoryButton>)}
            </CategoriesWrapper>
            <CardsWrapper>
                {filteredArticles.slice(0, isVisible).map((article, index) => index > 0 && <ArticleCard data={article} key={`${article.title}-${index}`} />)}
            </CardsWrapper>
            {(filteredArticles.length - isVisible > 0) && 
                <Button onClick={() => setIsVisible((prevValue) => prevValue + 4)}>
                    <ButtonText>Load more</ButtonText>
                </Button>
            }
        </Container>);
}