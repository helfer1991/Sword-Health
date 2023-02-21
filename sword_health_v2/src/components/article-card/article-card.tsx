import React, { useState } from 'react';

import { Container, Image, RightWrapper, Title, Description, Button } from './styles';
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
    variant?: string;
}

export const ArticleCard: React.FC<ArticleProps> = ({ data, variant = 'A' }) => { 
    const [show, setShow] = useState<boolean>(false);
    const imgSrc = data.image ? data.image : image;
    const { getUser } = useLogin();

    const handleClick = () => {
        setShow(!show);
    }
    
    return (
        <Container variant={variant}>
            <Image src={imgSrc} alt="article-image" />
            <RightWrapper variant="B">
                <div>
                    <Title>{data.title}</Title>
                    <Description>{data.description}</Description>
                </div>
                {getUser()?.role === 'User' && <Button onClick={handleClick}>Read more</Button>}
                <Modal show={show} onClose={() => setShow(false)} data={data} />
            </RightWrapper>
        </Container>
    );
};