import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useNavigate} from 'react-router-dom';

import { Container, Wrapper, Title, Description, Details, ContentWrapper, TextWrapper, Image, ButtonWrapper, Button } from './styles';
import image from '../../assets/logo.png';

type ArticleProps = {
    data: {
        title: string;
        description: string;
        category: string;
        image: string;
        details: string;
        username?: string;
    };
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const Modal: React.FC<ArticleProps> = ({ data, show, onClose }) => {
    const { getUser } = useLogin();
    const bookmark = localStorage.getItem(`bookmark-${getUser()?.username}-${data.title}`);
    const [isBookmarked, setIsBookmarked] = useState<boolean>(bookmark ? true : false);
    const imgSrc = data.image ? data.image : image;

    const navigate = useNavigate();

    const handleClick = () => {
        setIsBookmarked(!isBookmarked);
        isBookmarked ? 
            localStorage.removeItem(`bookmark-${getUser()?.username}-${data.title}`) :
            localStorage.setItem(`bookmark-${getUser()?.username}-${data.title}`, JSON.stringify(data));
    }

    const handleEdit = () => {
        navigate('/create-article', { state: data });
    }

    return (show ?
        <Container onClick={onClose} data-testid="article-modal">
            <Wrapper onClick={e => e.stopPropagation()}>
                <Title>{data.title}</Title>
                <hr/>
                <ContentWrapper>
                    <TextWrapper>
                            <Description>{data.description}</Description>
                            <Details>{data.details}</Details>
                    </TextWrapper>
                <Image src={imgSrc} alt="modal-image" />
                </ContentWrapper>
                <hr/>
                <ButtonWrapper>
                    <Button onClick={onClose} data-testid="close-button">Close</Button>
                    <Button onClick={handleClick} data-testid="bookmark-button">{isBookmarked ? 'Unbookmark' : 'Bookmark'}</Button>
                    {getUser()?.username === data.username && <Button onClick={handleEdit} data-testid="edit-button">Edit</Button>}
                </ButtonWrapper>
            </Wrapper>
        </Container>
        : null
    );
}