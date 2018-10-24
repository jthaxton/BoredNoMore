import React, { Component } from 'react';
import './App.css';
import signup_form_container from "./components/session/signup_form_container";
import splashComponent from "./components/splash/splash";
import { Switch, Route } from 'react-router-dom'


const App = () => (
    <Switch>
      <Route exact path = "/" component={splashComponent} />
      <Route exact path="/signup" component={signup_form_container} />
    </Switch>
);

export default App;




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <HashRouter>
//           <Root />
//         </HashRouter>
//       </div>
//     );
//   }
// }

// export default App;
