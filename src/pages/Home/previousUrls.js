import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCollection, useCurrentUser } from '@rainbow-modules/firebase-hooks';

const Container = styled.div`
    margin-top: 15px;
`;

const Header = styled.h1`
    font-size: 18px;
    font-weight: bold;
`;

const Urls = () => {
    const { uid } = useCurrentUser();
    const [urls, isLoading] = useCollection({
        path: 'apis',
        query: ref => ref.where('uid', '==', uid),
    });
    if (isLoading) {
        return <span>Loading...</span>;
    }
    return urls.map((item) => {
        return (
            <li key={item.id}>
                <Link to={`/api/${item.id}`}>{item.data.url}</Link>
            </li>
        );    
    });
}

const PreviousUrls = () => {
    return (
        <Container>
            <Header>Previous OpenAPI</Header>
            <ul>
                <Urls />
            </ul>
        </Container>
    )    
};

export default PreviousUrls;