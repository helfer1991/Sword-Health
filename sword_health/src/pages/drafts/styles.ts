import styled from 'styled-components';

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 64px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1200px) {
        display: grid;
        column-gap: 16px;
        row-gap: 32px;
        grid-template-columns: 1fr 1fr;
    }
`;
