import styled from 'styled-components';

type IsSelected = {
    isSelected?: boolean;
}

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const CategoriesWrapper = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 32px;
`;

export const CategoriesParagraph = styled.p`
    font-size: 18px;
    margin-right: 12px;
    font-weight: 700;

    @media (min-width: 900px) {
        font-size: 24px;
        margin-right: 32px;
    }
`;

export const CategoryButton = styled.button<IsSelected>`
    border: 1px solid #000000;
    border-radius: 30px;
    padding: 5px;
    margin-left: 8px;
    background-color: ${(props) => props.isSelected? '#000000' : '#fff'};
    color: ${(props) => props.isSelected? '#fff' : '#000'};;
    font-weight: 700;
    min-width: 60px;
    height: 40px;

    @media (min-width: 900px) {
        min-width: 100px;
    }
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 900px) {
        display: grid;
        column-gap: 16px;
        row-gap: 32px;
        grid-template-columns: 1fr 1fr;
    }
`;

export const Button = styled.button`
    align-self: center;
    background-color: #484a46;
    border-radius: 4px;
    height: 30px;
    margin-top: 48px;
    width: 120px;
`;

export const ButtonText = styled.p`
    color: #fff;
    margin: auto;
`;

