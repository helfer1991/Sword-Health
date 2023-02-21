import styled from 'styled-components';

export const Container = styled.section`
    margin: auto;
    @media (min-width: 900px) {
        width: 40vh;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    padding: 8px;
`;

export const TextArea = styled.textarea`
    height: 300px;
    border: 2px solid #a8b3b3;
    border-radius: 4px;

    &::placeholder {
        color: #a8b3b3;
        font-size: 20px;
        padding: 16px;
    }
`;

export const SelectFields = styled.select`
    border: 2px solid #a8b3b3;
    border-radius: 4px;
    margin-top: 2px;
    padding: 8px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SubmitButton = styled.button`
    background-color: #484a46;
    border-radius: 4px;
    height: 30px;
    margin-top: 20px;
    width: 120px;
`;

export const SubmitButtonText = styled.p`
    color: #fff;
    margin: auto;
`;