import styled from 'styled-components';

import { NavLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    margin-bottom: 24px;
`;

export const Image = styled.img`
    background-color: grey;
    height: 30px;
    width: 60px;

    @media (min-width: 900px) {
        height: 40px;
        width: 120px;
    }
`;

export const FeaturesWrapper = styled.span`
    align-items: center;
    display: flex;
    gap: 16px;
    margin-bottom: 12px;

    @media (min-width: 900px) {
        gap: 32px;
    }
`;

export const Link = styled(NavLink)`
    color: #000000;
    text-decoration: none;
`;

export const LinkText = styled.h4`
    font-size: 14px;
    font-weight: 700;
    margin: 0;

    &:hover, &:focus {
        color: rgba(117, 117, 117, 1);
    }

    @media (min-width: 900px) {
        font-size: 20px;
    }
`;

export const Button = styled.button`
    background-color: #df552b;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    padding: 8px;
    width: 100%;
`;