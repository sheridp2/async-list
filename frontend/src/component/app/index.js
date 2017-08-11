import React from 'react';
import { Provider } from 'react-redux';
import appStoreCreate from '../../lib/app-store-create.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard';

const store = appStoreCreate()

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <BrowserRouter>
            <main>
              <h1>Cool Beans</h1>
              <Route exact path ='/' component={Dashboard} />
            </main>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
