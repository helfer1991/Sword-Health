import React, { useState } from 'react';

import { Container, Image, LeftWrapper, Title, Description, Button } from './styles';
import image from '../../assets/logo.png';
import { Modal } from '../article-modal';
import { useLogin } from '../../hooks/useLogin';

type ArticleProps = {
    data: {
        title: string;
        description: string;
        image: string;
        category: string;
        details: string;
    };
}

export const MainArticleCard: React.FC<ArticleProps> = ({ data }) => { 
    const [show, setShow] = useState<boolean>(false);
    const imgSrc = data.image ? data.image : image;
    const { getUser } = useLogin();

    const handleClick = () => {
        setShow(!show);
    }
    
    return (
        <Container>
            <LeftWrapper>
                <div>
                    <Title>{data.title}</Title>
                    <Description>{data.description}</Description>
                </div>
                {getUser()?.role === 'User' && <Button onClick={handleClick} data-testid="read-more-button" type="button">Read more</Button>}
                <Modal show={show} onClose={() => setShow(false)} data={data} />
            </LeftWrapper>
            <Image src={imgSrc} alt="article-image" />
        </Container>
    );
};