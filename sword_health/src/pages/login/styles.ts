import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    border: 2px solid #a8b3b3;
    border-radius: 8px;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 200px;
`;

export const Wrapper = styled.div<{ variant?: string }>`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`;

export const FieldsDescription = styled.h4`
    margin: 0;
`;

export const InputFields = styled.input`
    border: 2px solid #a8b3b3;
    border-radius: 4px;
    margin-top: 2px;
`;

export const Link = styled(NavLink)`
    color: #fff;
    text-decoration: none;
`;

export const ButtonWrapper = styled.span`
    display: flex;
    gap: 16px;
`;

export const Button = styled.button<{ variant?: string }>`
    background-color: ${(props) => props.variant === 'signup' ? '#77B379' : '#297ACC'};
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 8px;
    color: #fff;
    width: 50%;
`;