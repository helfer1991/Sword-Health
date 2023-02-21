import styled from 'styled-components';

type Variant = {
    variant?: string;
}

export const Container = styled.div<Variant>`
    display: flex;
    width: 100%;
`;

export const Image = styled.img`
    height: 150px;
    width: 150px;
`;

export const RightWrapper = styled.div<Variant>`
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.h6`
    font-size: 20px;
    line-height: 1.5;
    margin: 0 0 12px 0;
`;

export const Description = styled.p`
    font-size: 12px;
    line-clamp: 3;
`;

export const Button = styled.button`
    background-color: #297ACC;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 8px;
    color: #fff;
    width: 50%;

    @media (min-width: 900px) {
        width: 30%;
    }
`;