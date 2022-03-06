import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/bootstrap.min.css';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import ReduxProvider from './providers/redux.provider';
import PersistProvider from './providers/persist.provider';

ReactDOM.render(
    <React.StrictMode>
      <ReduxProvider>
        <Router>
          <PersistProvider>
            <App/>
          </PersistProvider>
        </Router>
      </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
