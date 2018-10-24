import React from "react";
import { Provider } from "react-redux";
import signup_form_container from './session/signup_form_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const Root = ({store}) => (
  <div>
    <Provider store = {store}>
    <HashRouter>
      <Route path="/" component={signup_form_container} />
    </HashRouter>
    </Provider>
  </div>
);

export default Root