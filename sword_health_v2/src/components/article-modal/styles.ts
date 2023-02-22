import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 12px;
    width: 500px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12px 0 12px 0;
    height: 400px;
    overflow-y: auto;
`;

export const TextWrapper = styled.div`
    overflow-y: auto;
`;

export const Image = styled.img`
    height: 150px;
    width: 150px;
`;

export const Title = styled.h2`
    font-size: 24px;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
`;

export const ButtonWrapper = styled.span`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
`;

export const Button = styled.button`
    background-color: #297ACC;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 8px;
    color: #fff;
    width: 20%;
`;