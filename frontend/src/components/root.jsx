import React from "react";
import { Provider } from "react-redux";
import signup_form from './session/signup_form';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const Root = () => (
    <div>
        <Route path = "/" component = {signup_form} />
    </div>
);

export default Root