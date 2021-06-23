import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire'; // New Import
import 'firebase/auth'; // NEW IMPORT
import { firebaseConfig } from './firebaseConfig' // NEW IMPORT
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}> {/* New Provider */}
      <Router>
        <Switch>
        <Route path='/'>
            <App></App>
          </Route>
        </Switch>
      </Router>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();