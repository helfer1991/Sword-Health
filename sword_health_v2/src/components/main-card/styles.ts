import styled from 'styled-components';

type Variant = {
    variant?: string;
}

export const Container = styled.div<Variant>`
    display: flex;
    margin-bottom: 32px;
    gap: 16px;
    width: 100%;
`;

export const Image = styled.img`
    height: 320px;
    width: 50%;
`;

export const LeftWrapper = styled.div<Variant>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
`;

export const Title = styled.h2`
    font-size: 32px;
    line-height: 1.5;
    margin: 0 0 12px 0;
`;

export const Description = styled.h6`
    font-size: 16px;
    line-clamp: 3;
    margin: 0;
`;

export const Button = styled.button`
    background-color: #297ACC;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 12px;
    padding: 8px;
    color: #fff;
    width: 60%;

    @media (min-width: 900px) {
        width: 30%;
        font-size: 16px;
    }
`;