import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { WhenAuthenticated } from '@rainbow-modules/auth';
import { Switch, Route } from 'react-router-dom';
import app from './firebase';
import Home from './pages/Home';
import Api from './pages/Api';


const initialize = async () => {
    try {
        await app.auth().signInAnonymously();
    } catch (err) {
        // eslint-disable-next-line no-alert
        alert(err.toString());
    }
};

function App() {
    return (
        <RainbowFirebaseApp app={app} initialize={initialize}>
            <WhenAuthenticated path="/">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/api/:id" component={Api} />
                </Switch>
            </WhenAuthenticated>    
        </RainbowFirebaseApp>
    );
}

export default App;
