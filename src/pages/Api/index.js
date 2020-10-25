import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-rainbow-components';
import { useParams, useHistory } from 'react-router-dom';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import app from '../../firebase';

const Api = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [url, setUrl] = useState();
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        (async () => {
            const doc = await app.firestore().doc(`/apis/${id}`).get();
            if (doc.exists) {
                setUrl(doc.data().url);
                setLoading(false);
            } else {
                history.push('/');
            }
        })();
    }, [history, id]);
    if (isLoading) {
        return <Spinner />;
    }
    return <SwaggerUI url={url} />
};

export default Api;