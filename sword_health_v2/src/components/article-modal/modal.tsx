import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useNavigate} from 'react-router-dom';

import { Container, Wrapper, Title, Description, ContentWrapper, Image, ButtonWrapper, Button } from './styles';
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
        <Container onClick={onClose}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <Title>{data.title}</Title>
                <hr/>
                <ContentWrapper>
                <span>
                    <Description>{data.description}</Description>
                    <Description>{data.details}</Description>
                </span>
                <Image src={imgSrc} alt="modal-image" />
                </ContentWrapper>
                <hr/>
                <ButtonWrapper>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={handleClick}>{isBookmarked ? 'Unbookmark' : 'Bookmark'}</Button>
                    {getUser()?.username === data.username && <Button onClick={handleEdit}>Edit</Button>}
                </ButtonWrapper>
            </Wrapper>
        </Container>
        : null
    );
}