import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Log In" initial/>
                </Scene>
                <Scene key="main">
                    <Scene key="userProfile" component={Profile} title="Profile" rightTitle="Logout" onRight={() => Actions.auth()} />
                </Scene>
            </Scene>
        </Router>
    );
}
export default RouterComponent;