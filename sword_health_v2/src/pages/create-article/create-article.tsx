import React, { useState } from 'react';

import { Container, Wrapper, FieldsDescription, TextArea, SubmitButton, InputFields, SelectFields, SubmitButtonText, ButtonWrapper } from './styles';
import { useLogin } from '../../hooks/useLogin';
import { useLocation } from 'react-router-dom';

type Article = {
    title: string;
    description: string;
    category: string;
    image: string;
    details: string;
    username?: string;
}

export const CreateArticle: React.FC = () => {
    const { getUser } = useLogin();
    const { state } = useLocation();
    const [articleData, setArticleData] = useState<Article>({
        title: '',
        description: '',
        category: '',
        image: '',
        details: '',
        username: getUser()?.username,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setArticleData({
        ...articleData,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        state && localStorage.removeItem(`draft-${state.username}-${state.title}`);
        localStorage.setItem(`formData-${articleData.title}-${getUser()?.username}`, JSON.stringify(articleData));
        setArticleData({
            title: '',
            description: '',
            category: '',
            image: '',
            details: '',
            username: getUser()?.username,
        })
    };

    const handleClickDraft = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.setItem(`draft-${getUser()?.username}-${articleData.title}`, JSON.stringify(articleData));
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Wrapper>
                    <label htmlFor="title">
                        <FieldsDescription>Title:</FieldsDescription>
                    </label>
                    <InputFields
                        type="text"
                        id="title"
                        name="title"
                        value={articleData.title}
                        onChange={handleChange}
                        placeholder={state ? `${state.title}` : 'Your title'}
                        required
                    />
                </Wrapper>

                <Wrapper>
                    <label htmlFor="description">
                        <FieldsDescription>Description:</FieldsDescription>
                    </label>
                    <TextArea
                        id="description"
                        name="description"
                        value={articleData.description}
                        onChange={handleChange}
                        placeholder={state ? `${state.description}` : 'Your description'}
                        required
                    />
                </Wrapper>

                <Wrapper>
                    <label htmlFor="image">
                        <FieldsDescription>Image:</FieldsDescription>
                    </label>
                    <InputFields
                        type="text"
                        id="image"
                        name="image"
                        value={articleData.image}
                        onChange={handleChange}
                        placeholder={state ? `${state.image}` : 'Your image'}
                    />
                </Wrapper>

                <Wrapper>
                    <label htmlFor="category">
                        <FieldsDescription>Category:</FieldsDescription>
                    </label>
                    <SelectFields
                        id="category"
                        name="category"
                        value={articleData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select a category</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Design">Design</option>
                        <option value="Engineering">Engineering</option>
                    </SelectFields>
                </Wrapper>

                <Wrapper>
                    <label htmlFor="details">
                        <FieldsDescription>Details:</FieldsDescription>
                    </label>
                    <TextArea
                        id="details"
                        name="details"
                        value={articleData.details}
                        onChange={handleChange}
                        placeholder={state ? `${state.details}` : 'Your text'}
                        required
                    />
                </Wrapper>
                
                <ButtonWrapper>
                    <SubmitButton type="submit" name="submit">
                        <SubmitButtonText>Submit</SubmitButtonText>
                    </SubmitButton>
                    <SubmitButton onClick={handleClickDraft}>
                        <SubmitButtonText>Draft</SubmitButtonText>
                    </SubmitButton>
                </ButtonWrapper>
            </form>
        </Container>
    );
};
