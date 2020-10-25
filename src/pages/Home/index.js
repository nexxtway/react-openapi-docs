import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Card } from 'react-rainbow-components';
import addUrl from './addUrl';
import PreviousUrls from './previousUrls';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledCard = styled(Card)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 400px;
    justify-content: space-between;
`;

const Home = () => {
    const [url, setUrl] = useState('');
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const id = await addUrl(url);
        history.push(`/api/${id}`);
    };
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <StyledCard>
                <Input 
                    label="Open API URL:"
                    type="url" 
                    value={url}
                    onChange={event => setUrl(event.target.value)}
                    placeholder="https://example.com"
                    pattern="https://.*" 
                    required
                />
                <Button type="submit" label="See Swagger Docs" />
                </StyledCard>
                <PreviousUrls />
            </form>    
        </Container>
    );
};

export default Home;